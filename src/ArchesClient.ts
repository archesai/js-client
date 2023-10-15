/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AccessTokens } from './services/AccessTokens';
import { Agents } from './services/Agents';
import { Animations } from './services/Animations';
import { Authentication } from './services/Authentication';
import { Billing } from './services/Billing';
import { Documents } from './services/Documents';
import { EmailVerification } from './services/EmailVerification';
import { Images } from './services/Images';
import { Jobs } from './services/Jobs';
import { Members } from './services/Members';
import { Messages } from './services/Messages';
import { Organizations } from './services/Organizations';
import { PasswordReset } from './services/PasswordReset';
import { Storage } from './services/Storage';
import { TextSegments } from './services/TextSegments';
import { Threads } from './services/Threads';
import { Tools } from './services/Tools';
import { User } from './services/User';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ArchesClient {

    public readonly accessTokens: AccessTokens;
    public readonly agents: Agents;
    public readonly animations: Animations;
    public readonly authentication: Authentication;
    public readonly billing: Billing;
    public readonly documents: Documents;
    public readonly emailVerification: EmailVerification;
    public readonly images: Images;
    public readonly jobs: Jobs;
    public readonly members: Members;
    public readonly messages: Messages;
    public readonly organizations: Organizations;
    public readonly passwordReset: PasswordReset;
    public readonly storage: Storage;
    public readonly textSegments: TextSegments;
    public readonly threads: Threads;
    public readonly tools: Tools;
    public readonly user: User;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.archesai.com',
            VERSION: config?.VERSION ?? '1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accessTokens = new AccessTokens(this.request);
        this.agents = new Agents(this.request);
        this.animations = new Animations(this.request);
        this.authentication = new Authentication(this.request);
        this.billing = new Billing(this.request);
        this.documents = new Documents(this.request);
        this.emailVerification = new EmailVerification(this.request);
        this.images = new Images(this.request);
        this.jobs = new Jobs(this.request);
        this.members = new Members(this.request);
        this.messages = new Messages(this.request);
        this.organizations = new Organizations(this.request);
        this.passwordReset = new PasswordReset(this.request);
        this.storage = new Storage(this.request);
        this.textSegments = new TextSegments(this.request);
        this.threads = new Threads(this.request);
        this.tools = new Tools(this.request);
        this.user = new User(this.request);
    }
}

