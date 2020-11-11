import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import * as AWS from 'aws-sdk';
import { LexRuntime } from 'aws-sdk';
import { environment } from 'src/environments/environment';

export class Message {
  constructor(public content: string, public sender: string) { }
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.sass']
})
export class ChatbotComponent implements AfterViewInit {

  lex: LexRuntime;
  messages: Message[];
  lexState: string;
  @ViewChild('scroll', { static: true }) scroll: any;

  constructor() {
    this.lex = new LexRuntime({
      accessKeyId: environment.AWS_ACCESS_KEY_ID,
      secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
    });
    this.messages = [];
  }

  ngAfterViewInit() {
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
}

postLexText(userInput) {
  const params = {
    botAlias: 'schedule',
    botName: 'ScheduleAnAppointment',
    inputText: 'Testing',
    userId: 'User',
  };
  params.inputText = userInput;
  this.lex.postText(params, (err, data) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      this.lexState = data.message;
    }
    this.messages.push(new Message(userInput, 'User'));
    this.messages.push(new Message(this.lexState, 'Bot'));
    setTimeout(() => {
      this.scroll.nativeElement.scrollTo(0, this.scroll.nativeElement.scrollHeight);
    }, 0);
  });
}
}
