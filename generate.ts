import axios from "axios";
import fs from "fs";
import { execSync } from "child_process";

async function fetchOpenapiFromServer(outputFilePath: string): Promise<void> {
  const response = await axios.get("https://api.archesai.com/-json");
  fs.writeFileSync(outputFilePath, JSON.stringify(response.data, null, 4));
}

function convertInlineToRef(openapiFilePath: string): void {
  const data = JSON.parse(fs.readFileSync(openapiFilePath, "utf-8"));

  if (!data.components) {
    data.components = {};
  }
  if (!data.components.schemas) {
    data.components.schemas = {};
  }

  const paths = data.paths;
  for (const path in paths) {
    for (const method in paths[path]) {
      const details = paths[path][method];
      if (details.responses) {
        for (const responseCode in details.responses) {
          const response = details.responses[responseCode];
          if (response.content) {
            for (const contentType in response.content) {
              const contentDetails = response.content[contentType];
              const schema = contentDetails.schema;
              if (schema && schema.allOf) {
                const schemaTitle = schema.title || "";
                if (schemaTitle) {
                  data.components.schemas[schemaTitle] = schema;
                  data.components.schemas[schemaTitle].allOf[1].type = "object";
                  contentDetails.schema = {
                    $ref: `#/components/schemas/${schemaTitle}`,
                  };
                }
              }
            }
          }
        }
      }
      if (details.operationId && details.operationId.includes("_")) {
        details.operationId = details.operationId.split("_").pop();
      }
    }
  }

  fs.writeFileSync(openapiFilePath, JSON.stringify(data, null, 4));
}

function generateOpenapiClient(inputFilePath: string): void {
  const command = `npx openapi --input ${inputFilePath} --output src --postfixServices "" --name ArchesClient --useOptions`;
  execSync(command);
}

function generatePythonClient(inputFilePath: string): void {
  const command = `openapi-python-client generate --path ${inputFilePath}`;
  execSync(command);
}

(async () => {
  const outputFilePath = "output.json";
  await fetchOpenapiFromServer(outputFilePath);
  convertInlineToRef(outputFilePath);
  console.log(`Processed ${outputFilePath}`);
  generateOpenapiClient(outputFilePath);
  console.log(`Generated client from ${outputFilePath}`);
})();
