import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  userInput = '';
  messages: { text: string; sender: 'user' | 'bot' }[] = [];

  constructor(public geminiService: GeminiService) { }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ text: this.userInput, sender: 'user' });

    this.geminiService.askGemini(this.userInput).subscribe(
      res => {
        const botReply = res?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
        this.messages.push({ text: botReply, sender: 'bot' });
      },
      err => {
        console.error(err);
        this.messages.push({ text: 'Error fetching response', sender: 'bot' });
      }
    );

    this.userInput = '';
  }


}
