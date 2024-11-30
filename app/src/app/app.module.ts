// library
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NouisliderModule } from "ng2-nouislider";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { AngularSplitModule } from "angular-split";
import { NgSelectModule } from "@ng-select/ng-select";
import { TooltipModule } from "ng2-tooltip-directive";
import { OverlayscrollbarsModule } from "overlayscrollbars-ngx";
// local
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Message } from "./models/message";
import { SessionPage, DeploymentConfig } from "./models/config";
import { HttpErrorHandler } from "./services/http-error-handler.service";
import { MessageService } from "./services/message.service";
import { ChatService } from "./services/socket.service";
import { UtilsService } from "./services/utils.service";
import { MainActivityComponent } from "./main-activity/component";

import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { AiChatService } from './services/chat.service';

// const config: SocketIoConfig = {
//   url: DeploymentConfig.SERVER_URL,
//   options: { timeout: 60000, autoConnect: false },
// };

const config: SocketIoConfig = { 
  // url: 'http://localhost:3000', 
  url: DeploymentConfig.SERVER_URL,
  options: {
    // transports: ['websocket'],
    autoConnect: false,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5
  }
};


@NgModule({
  declarations: [
    AppComponent,
    MainActivityComponent,
    ChatWindowComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    OverlayscrollbarsModule,
    NgSelectModule,
    TooltipModule,
    AngularSplitModule.forRoot(),
    NouisliderModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    SessionPage,
    Message,
    MainActivityComponent,
    HttpErrorHandler,
    MessageService,
    ChatService,
    UtilsService,
    AiChatService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
