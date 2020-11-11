import { Component, OnInit } from '@angular/core';
// import * as AWS from 'aws-sdk';
import { LexRuntime } from 'aws-sdk';
import { environment } from 'src/environments/environment';

export class Message {
  constructor(public content: string, public sender: string) { }
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  lex: LexRuntime;
  messages: Message[];
  lexState: string;

  constructor() {
    this.lex = new LexRuntime({
      accessKeyId: environment.AWS_ACCESS_KEY_ID,
      secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
    });
    this.messages = [];
  }

  ngOnInit() {
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
      console.log(data); // successful response
      this.lexState = data.message;
    }
    this.messages.push(new Message(userInput, 'User'));
    this.messages.push(new Message(this.lexState, 'Bot'));
  }
  );
    }




  //   this.params = {
  //     botAlias: '\$schedule',
  //     botName: 'ScheduleAnAppointment',
  //     inputText: 'Testing',
  //     userId: 'User',
  //   };
  //   this.lex = new LexRuntime(
  //     {
  //       accessKeyId: 'AKIATFN5DVZFQE2RWXFY',
  //       secretAccessKey: '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',
  //       region: 'us-east-1'
  //     }
  //   );
  //   this.params.inputText = userInput;
  //   this.lex.postText(this.params, (err, data) => {
  //     if (err) {
  //       console.log(err, err.stack); // an error occurred
  //     } else {
  //       console.log(data); // successful response
  //       this.lexState = data.message;
  //     }
  //     this.messages.push(new Message(userInput, 'User'));
  //     this.messages.push(new Message(this.lexState, 'Bot'));
  //   }
  //   );
  // }

}
