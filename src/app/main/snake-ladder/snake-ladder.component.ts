// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-snake-ladder',
//   templateUrl: './snake-ladder.component.html',
//   styleUrls: ['./snake-ladder.component.scss']
// })
// export class SnakeLadderComponent {

// }


// import { Component, signal, computed } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-snake-ladder',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
//       <div class="bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 max-w-lg w-full">
//         <h1 class="text-4xl font-extrabold text-center text-green-400">Snake & Ladder</h1>
//         <div class="text-center">
//           <p class="text-xl font-semibold text-gray-300">Current Player: <span class="font-bold" [style.color]="players()[currentPlayerIndex()].color">{{ players()[currentPlayerIndex()].color }}</span></p>
//           <div *ngIf="message()" class="mt-2 text-lg font-medium text-yellow-400 animate-pulse">
//             {{ message() }}
//           </div>
//           <div *ngIf="narratorMessage()" class="mt-2 text-lg font-medium text-lime-400 transition-opacity duration-500" [ngClass]="{'opacity-100': narratorMessage(), 'opacity-0': !narratorMessage()}">
//             ✨ {{ narratorMessage() }}
//           </div>
//           <div *ngIf="isNarrating()" class="mt-2 text-lg text-gray-400 animate-pulse">
//             AI is thinking...
//           </div>
//         </div>

//         <!-- Game Board -->
//         <div class="grid grid-cols-10 border-4 border-gray-700 rounded-lg overflow-hidden relative">
//           <ng-container *ngFor="let square of board(); let i = index">
//             <div
//               class="relative w-full aspect-square border border-gray-700 flex items-center justify-center text-sm font-bold"
//               [ngClass]="{
//                 'bg-gray-700': i % 2 === 0,
//                 'bg-gray-600': i % 2 !== 0
//               }"
//             >
//               <div
//                 *ngIf="square.snakeladder"
//                 class="absolute inset-0 flex items-center justify-center text-2xl"
//               >
//                 <span *ngIf="square.snakeladder.type === 'snake'" class="transform rotate-180">{{ snakeEmoji }}</span>
//                 <span *ngIf="square.snakeladder.type === 'ladder'">{{ ladderEmoji }}</span>
//               </div>
//               <span>{{ square.number }}</span>
//               <!-- Player piece -->
//               <div *ngIf="square.players.length > 0" class="absolute inset-0 flex items-center justify-center space-x-1">
//                 <div *ngFor="let player of square.players"
//                      class="w-4 h-4 rounded-full border-2 border-white transform transition-all duration-300"
//                      [style.backgroundColor]="player.color"
//                 ></div>
//               </div>
//             </div>
//           </ng-container>
//         </div>

//         <!-- Dice and Controls -->
//         <div class="flex flex-col items-center space-y-4">
//           <button
//             (click)="rollDice()"
//             [disabled]="isRolling()"
//             class="bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-full text-xl shadow-lg hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {{ isRolling() ? 'Rolling...' : 'Roll Dice!' }}
//           </button>
//           <div
//             *ngIf="diceValue()"
//             class="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center border-2 border-green-400 transition-all duration-300"
//             [ngClass]="{'animate-dice-roll': isRolling()}"
//           >
//             <div [ngSwitch]="diceValue()" class="w-full h-full p-2 grid grid-cols-3 grid-rows-3 gap-1">
//               <ng-container *ngSwitchCase="1">
//                 <div class="col-start-2 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
//               </ng-container>
//               <ng-container *ngSwitchCase="2">
//                 <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//               </ng-container>
//               <ng-container *ngSwitchCase="3">
//                 <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-2 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//               </ng-container>
//               <ng-container *ngSwitchCase="4">
//                 <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-1 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//               </ng-container>
//               <ng-container *ngSwitchCase="5">
//                 <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-2 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-1 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//               </ng-container>
//               <ng-container *ngSwitchCase="6">
//                 <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-1 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-1 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
//                 <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
//               </ng-container>
//             </div>
//           </div>
//           <button
//             (click)="resetGame()"
//             class="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition-colors"
//           >
//             Reset Game
//           </button>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [`
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

//     :host {
//       font-family: 'Inter', sans-serif;
//     }
    
//     @keyframes dice-roll {
//       0%, 100% { transform: rotate(0deg); }
//       25% { transform: rotate(90deg); }
//       50% { transform: rotate(180deg); }
//       75% { transform: rotate(270deg); }
//     }
    
//     .animate-dice-roll {
//       animation: dice-roll 0.5s infinite;
//     }
//   `]
// })
// export class SnakeLadderComponent {
//   // Emojis for snakes and ladders
//   snakeEmoji = '🐍';
//   ladderEmoji = '🪜';

//   // Game state signals
//   private gameBoard = signal<any[]>([]);
//   private gamePlayers = signal<any[]>([]);
//   private gameCurrentPlayerIndex = signal(0);
//   private gameDiceValue = signal<number | null>(null);
//   private gameMessage = signal<string | null>(null);
//   private gameIsRolling = signal(false);

//   // AI Narrator signals
//   private gameNarratorMessage = signal<string | null>(null);
//   private gameIsNarrating = signal(false);

//   // Expose signals publicly with computed for a reactive interface
//   board = computed(() => this.gameBoard());
//   players = computed(() => this.gamePlayers());
//   currentPlayerIndex = computed(() => this.gameCurrentPlayerIndex());
//   diceValue = computed(() => this.gameDiceValue());
//   message = computed(() => this.gameMessage());
//   isRolling = computed(() => this.gameIsRolling());
//   narratorMessage = computed(() => this.gameNarratorMessage());
//   isNarrating = computed(() => this.gameIsNarrating());

//   // Board layout constants
//   // private snakeAndLadders = {
//   //   ladders: { 4: 14, 9: 31, 20: 38, 28: 84, 40: 59, 63: 81, 71: 91 },
//   //   snakes: { 17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 }
//   // };
//   private snakeAndLadders: {
//   ladders: { [key: number]: number };
//   snakes: { [key: number]: number };
// } = {
//   ladders: { 4: 14, 9: 31, 20: 38, 28: 84, 40: 59, 63: 81, 71: 91 },
//   snakes: { 17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 }
// };


//   constructor() {
//     this.initializeBoard();
//     this.initializePlayers();
//     this.gameMessage.set("Roll the dice to start the game!");
//   }

//   /**
//    * Initializes the game board with 100 squares and snake/ladder positions.
//    * The board is constructed from bottom-left to top-left in a snaking pattern.
//    */
//   private initializeBoard(): void {
//     const squares = [];
//     const snakeAndLadders = this.snakeAndLadders;
//     let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    
//     for (let i = 0; i < 10; i++) {
//       const row = numbers.slice(i * 10, (i + 1) * 10);
//       if (i % 2 !== 0) {
//         row.reverse();
//       }
//       for (const number of row) {
//         let snakeladder = null;
//         if (snakeAndLadders.ladders[number]) {
//           snakeladder = { type: 'ladder', to: snakeAndLadders.ladders[number] };
//         } else if (snakeAndLadders.snakes[number]) {
//           snakeladder = { type: 'snake', to: snakeAndLadders.snakes[number] };
//         }
//         squares.push({ number, players: [], snakeladder });
//       }
//     }
    
//     this.gameBoard.set(squares.reverse());
//   }

//   /**
//    * Initializes the two players and places them on the start square (square 1).
//    */
//   private initializePlayers(): void {
//     this.gamePlayers.set([
//       { id: 1, position: 1, color: '#f87171' }, // Tailwind red-400
//       { id: 2, position: 1, color: '#60a5fa' }  // Tailwind blue-400
//     ]);
//     this.updatePlayerPositions();
//   }

//   /**
//    * Updates the game board to reflect player positions.
//    */
//   private updatePlayerPositions(): void {
//     this.gameBoard.update(board => {
//       const newBoard = board.map(square => ({ ...square, players: [] }));
//       this.gamePlayers().forEach(player => {
//         const boardIndex = this.getBoardIndex(player.position);
//         if (boardIndex >= 0 && boardIndex < 100) {
//           newBoard[boardIndex].players.push(player);
//         }
//       });
//       return newBoard;
//     });
//   }

//   /**
//    * Maps a game position (1-100) to the board's display index (0-99).
//    */
//   private getBoardIndex(position: number): number {
//     return this.gameBoard().findIndex(square => square.number === position);
//   }

//   /**
//    * Simulates a dice roll with an animation and handles the player's turn.
//    */
//   public async rollDice(): Promise<void> {
//     if (this.isRolling()) return;

//     this.gameIsRolling.set(true);
//     this.gameNarratorMessage.set(null);

//     // Dice roll animation
//     const roll = await new Promise<number>(resolve => {
//       let rollInterval = setInterval(() => {
//         this.gameDiceValue.set(Math.floor(Math.random() * 6) + 1);
//       }, 100);

//       setTimeout(() => {
//         clearInterval(rollInterval);
//         const finalRoll = Math.floor(Math.random() * 6) + 1;
//         this.gameDiceValue.set(finalRoll);
//         resolve(finalRoll);
//       }, 1000);
//     });

//     this.gameMessage.set(`Player ${this.players()[this.currentPlayerIndex()].id} rolled a ${roll}!`);
//     await new Promise(resolve => setTimeout(resolve, 500));
    
//     await this.movePlayer(roll);
//     this.gameIsRolling.set(false);
//   }

//   /**
//    * Moves the current player based on the dice roll with a visual animation.
//    * @param roll The number rolled on the dice.
//    */
//   private async movePlayer(roll: number): Promise<void> {
//     const currentPlayer = this.players()[this.currentPlayerIndex()];
//     let currentPosition = currentPlayer.position;

//     for (let i = 0; i < roll; i++) {
//         let newPosition = currentPosition + 1;

//         if (newPosition > 100) {
//             this.gameMessage.set("You need an exact roll to win!");
//             this.nextTurn();
//             return;
//         }

//         this.updatePlayerPosition(currentPlayer, newPosition);
//         this.gameMessage.set(`Player ${currentPlayer.id} moves from ${currentPosition} to ${newPosition}.`);
//         currentPosition = newPosition;
//         await new Promise(resolve => setTimeout(resolve, 300));
//     }

//     let finalPosition = currentPosition;
//     let snakeOrLadderMove = false;

//     if (this.snakeAndLadders.ladders[finalPosition]) {
//       finalPosition = this.snakeAndLadders.ladders[finalPosition];
//       this.gameMessage.set(`Player ${currentPlayer.id} found a ladder! Climbs to ${finalPosition}.`);
//       await this.generateNarrative(`Player ${currentPlayer.id} landed on a ladder at ${currentPosition} and climbed to ${finalPosition}.`, 'Generate a short, exciting story or description about climbing a ladder.');
//       snakeOrLadderMove = true;
//     } else if (this.snakeAndLadders.snakes[finalPosition]) {
//       finalPosition = this.snakeAndLadders.snakes[finalPosition];
//       this.gameMessage.set(`Oh no! Player ${currentPlayer.id} landed on a snake. Slips to ${finalPosition}.`);
//       await this.generateNarrative(`Player ${currentPlayer.id} landed on a snake at ${currentPosition} and slipped to ${finalPosition}.`, 'Generate a short, dramatic or unfortunate story or description about slipping down a snake.');
//       snakeOrLadderMove = true;
//     }

//     if (finalPosition !== currentPosition) {
//       this.updatePlayerPosition(currentPlayer, finalPosition);
//       await new Promise(resolve => setTimeout(resolve, 500));
//     }

//     if (finalPosition === 100) {
//       this.gameMessage.set(`Player ${currentPlayer.id} wins!`);
//       await this.generateNarrative(`The game has just ended, and Player ${currentPlayer.id} has won!`, 'Generate a short, celebratory message for a game winner.');
//       return;
//     }

//     if (roll === 6 && !snakeOrLadderMove) {
//       this.gameMessage.set("You rolled a 6! You get another turn.");
//       this.gameNarratorMessage.set(null);
//     } else {
//       this.nextTurn();
//     }
//   }


//   /**
//    * Calls the Gemini API to generate a narrative message.
//    * @param context The context for the prompt (e.g., snake, ladder, win).
//    * @param userQuery The query to send to the LLM.
//    */
//   private async generateNarrative(context: string, userQuery: string): Promise<void> {
//     this.gameIsNarrating.set(true);
//     this.gameNarratorMessage.set(null);
//     const systemPrompt = "You are an AI game narrator with a playful and exciting tone. Provide a short, single-sentence commentary for a game event. Do not mention the numbers or players by name. The message should be a creative, fun, and concise description of the event.";
//     const apiKey = "";
//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

//     const payload = {
//       contents: [{ parts: [{ text: userQuery }] }],
//       systemInstruction: {
//         parts: [{ text: systemPrompt }]
//       },
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });
//       const result = await response.json();
//       const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
//       if (text) {
//         this.gameNarratorMessage.set(text);
//       } else {
//         throw new Error("Invalid response from the API.");
//       }
//     } catch (e) {
//       console.error("Error during AI narration:", e);
//       this.gameNarratorMessage.set("The narrator is speechless!");
//     } finally {
//       this.gameIsNarrating.set(false);
//     }
//   }

//   /**
//    * Updates a single player's position in the state.
//    * @param playerToUpdate The player object to update.
//    * @param newPosition The new position for the player.
//    */
//   private updatePlayerPosition(playerToUpdate: any, newPosition: number): void {
//     this.gamePlayers.update(players => {
//       return players.map(p => p.id === playerToUpdate.id ? { ...p, position: newPosition } : p);
//     });
//     this.updatePlayerPositions();
//   }

//   /**
//    * Advances the game to the next player's turn.
//    */
//   private nextTurn(): void {
//     this.gameCurrentPlayerIndex.update(index => (index + 1) % this.players().length);
//   }

//   /**
//    * Resets the game to its initial state.
//    */
//   public resetGame(): void {
//     this.initializeBoard();
//     this.initializePlayers();
//     this.gameCurrentPlayerIndex.set(0);
//     this.gameDiceValue.set(null);
//     this.gameMessage.set("Game has been reset. Roll to begin!");
//     this.gameIsRolling.set(false);
//     this.gameNarratorMessage.set(null);
//   }
// }



import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snake-ladder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <div class="bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 max-w-lg w-full">
        <h1 class="text-4xl font-extrabold text-center text-green-400">Snake & Ladder</h1>
        <div class="text-center">
          <p class="text-xl font-semibold text-gray-300">Current Player: <span class="font-bold" [style.color]="players()[currentPlayerIndex()].color">{{ players()[currentPlayerIndex()].id }}</span></p>
          <div *ngIf="message()" class="mt-2 text-lg font-medium text-yellow-400 animate-pulse">
            {{ message() }}
          </div>
          <div *ngIf="narratorMessage()" class="mt-2 text-lg font-medium text-lime-400 transition-opacity duration-500" [ngClass]="{'opacity-100': narratorMessage(), 'opacity-0': !narratorMessage()}">
            ✨ {{ narratorMessage() }}
          </div>
          <div *ngIf="isNarrating()" class="mt-2 text-lg text-gray-400 animate-pulse">
            AI is thinking...
          </div>
          <div *ngIf="adviceMessage()" class="mt-2 text-lg font-medium text-cyan-400 transition-opacity duration-500" [ngClass]="{'opacity-100': adviceMessage(), 'opacity-0': !adviceMessage()}">
            🧠 {{ adviceMessage() }}
          </div>
          <div *ngIf="isAdvising()" class="mt-2 text-lg text-gray-400 animate-pulse">
            AI is thinking...
          </div>
        </div>

        <!-- Game Board -->
        <div class="grid grid-cols-10 border-4 border-gray-700 rounded-lg overflow-hidden relative">
          <ng-container *ngFor="let square of board(); let i = index">
            <div
              class="relative w-full aspect-square border border-gray-700 flex items-center justify-center text-sm font-bold"
              [ngClass]="{
                'bg-gray-700': i % 2 === 0,
                'bg-gray-600': i % 2 !== 0
              }"
            >
              <div
                *ngIf="square.snakeladder"
                class="absolute inset-0 flex items-center justify-center text-2xl"
              >
                <span *ngIf="square.snakeladder.type === 'snake'" class="transform rotate-180">{{ snakeEmoji }}</span>
                <span *ngIf="square.snakeladder.type === 'ladder'">{{ ladderEmoji }}</span>
              </div>
              <span>{{ square.number }}</span>
              <!-- Player piece -->
              <div *ngIf="square.players.length > 0" class="absolute inset-0 flex items-center justify-center space-x-1">
                <div *ngFor="let player of square.players"
                     class="w-4 h-4 rounded-full border-2 border-white transform transition-all duration-300"
                     [style.backgroundColor]="player.color"
                ></div>
              </div>
            </div>
          </ng-container>
        </div>

        <!-- Dice and Controls -->
        <div class="flex flex-col items-center space-y-4">
          <button
            (click)="rollDice()"
            [disabled]="isRolling()"
            class="bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-full text-xl shadow-lg hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isRolling() ? 'Rolling...' : 'Roll Dice!' }}
          </button>
          <div
            *ngIf="diceValue()"
            class="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center border-2 border-green-400 transition-all duration-300"
            [ngClass]="{'animate-dice-roll': isRolling()}"
          >
            <div [ngSwitch]="diceValue()" class="w-full h-full p-2 grid grid-cols-3 grid-rows-3 gap-1">
              <ng-container *ngSwitchCase="1">
                <div class="col-start-2 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
              </ng-container>
              <ng-container *ngSwitchCase="2">
                <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
              </ng-container>
              <ng-container *ngSwitchCase="3">
                <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-2 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
              </ng-container>
              <ng-container *ngSwitchCase="4">
                <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-1 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
              </ng-container>
              <ng-container *ngSwitchCase="5">
                <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-2 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-1 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
              </ng-container>
              <ng-container *ngSwitchCase="6">
                <div class="col-start-1 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-1 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-1 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-1 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-2 w-full h-full bg-green-400 rounded-full"></div>
                <div class="col-start-3 row-start-3 w-full h-full bg-green-400 rounded-full"></div>
              </ng-container>
            </div>
          </div>
          <button
            (click)="getAdvice()"
            [disabled]="isAdvising()"
            class="bg-blue-500 text-white font-bold py-2 px-8 rounded-full text-lg shadow-lg hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Advice ✨
          </button>
          <button
            (click)="resetGame()"
            class="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

    :host {
      font-family: 'Inter', sans-serif;
    }
    
    @keyframes dice-roll {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(90deg); }
      50% { transform: rotate(180deg); }
      75% { transform: rotate(270deg); }
    }
    
    .animate-dice-roll {
      animation: dice-roll 0.5s infinite;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnakeLadderComponent {
  // Emojis for snakes and ladders
  snakeEmoji = '🐍';
  ladderEmoji = '🪜';

  // Game state signals
  private gameBoard = signal<any[]>([]);
  private gamePlayers = signal<any[]>([]);
  private gameCurrentPlayerIndex = signal(0);
  private gameDiceValue = signal<number | null>(null);
  private gameMessage = signal<string | null>(null);
  private gameIsRolling = signal(false);

  // AI Narrator signals
  private gameNarratorMessage = signal<string | null>(null);
  private gameIsNarrating = signal(false);

  // AI Advice signals
  private gameAdviceMessage = signal<string | null>(null);
  private gameIsAdvising = signal(false);

  // Expose signals publicly with computed for a reactive interface
  board = computed(() => this.gameBoard());
  players = computed(() => this.gamePlayers());
  currentPlayerIndex = computed(() => this.gameCurrentPlayerIndex());
  diceValue = computed(() => this.gameDiceValue());
  message = computed(() => this.gameMessage());
  isRolling = computed(() => this.gameIsRolling());
  narratorMessage = computed(() => this.gameNarratorMessage());
  isNarrating = computed(() => this.gameIsNarrating());
  adviceMessage = computed(() => this.gameAdviceMessage());
  isAdvising = computed(() => this.gameIsAdvising());

  // Board layout constants
  private snakeAndLadders: {
    ladders: { [key: number]: number };
    snakes: { [key: number]: number };
  } = {
    ladders: { 4: 14, 9: 31, 20: 38, 28: 84, 40: 59, 63: 81, 71: 91 },
    snakes: { 17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 }
  };


  constructor() {
    this.initializeBoard();
    this.initializePlayers();
    this.gameMessage.set("Roll the dice to start the game!");
  }

  /**
   * Initializes the game board with 100 squares and snake/ladder positions.
   * The board is constructed from bottom-left to top-left in a snaking pattern.
   */
  private initializeBoard(): void {
    const squares = [];
    const snakeAndLadders = this.snakeAndLadders;
    let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    
    for (let i = 0; i < 10; i++) {
      const row = numbers.slice(i * 10, (i + 1) * 10);
      if (i % 2 !== 0) {
        row.reverse();
      }
      for (const number of row) {
        let snakeladder = null;
        if (snakeAndLadders.ladders[number]) {
          snakeladder = { type: 'ladder', to: snakeAndLadders.ladders[number] };
        } else if (snakeAndLadders.snakes[number]) {
          snakeladder = { type: 'snake', to: snakeAndLadders.snakes[number] };
        }
        squares.push({ number, players: [], snakeladder });
      }
    }
    
    this.gameBoard.set(squares.reverse());
  }

  /**
   * Initializes the two players and places them on the start square (square 1).
   */
  private initializePlayers(): void {
    this.gamePlayers.set([
      { id: 1, position: 1, color: '#f87171' }, // Tailwind red-400
      { id: 2, position: 1, color: '#60a5fa' }  // Tailwind blue-400
    ]);
    this.updatePlayerPositions();
  }

  /**
   * Updates the game board to reflect player positions.
   */
  private updatePlayerPositions(): void {
    this.gameBoard.update(board => {
      const newBoard = board.map(square => ({ ...square, players: [] }));
      this.gamePlayers().forEach(player => {
        const boardIndex = this.getBoardIndex(player.position);
        if (boardIndex >= 0 && boardIndex < 100) {
          newBoard[boardIndex].players.push(player);
        }
      });
      return newBoard;
    });
  }

  /**
   * Maps a game position (1-100) to the board's display index (0-99).
   */
  private getBoardIndex(position: number): number {
    return this.gameBoard().findIndex(square => square.number === position);
  }

  /**
   * Simulates a dice roll with an animation and handles the player's turn.
   */
  public async rollDice(): Promise<void> {
    if (this.isRolling()) return;

    this.gameIsRolling.set(true);
    this.gameNarratorMessage.set(null);
    this.gameAdviceMessage.set(null);

    // Dice roll animation
    const roll = await new Promise<number>(resolve => {
      let rollInterval = setInterval(() => {
        this.gameDiceValue.set(Math.floor(Math.random() * 6) + 1);
      }, 100);

      setTimeout(() => {
        clearInterval(rollInterval);
        const finalRoll = Math.floor(Math.random() * 6) + 1;
        this.gameDiceValue.set(finalRoll);
        resolve(finalRoll);
      }, 1000);
    });

    this.gameMessage.set(`Player ${this.players()[this.currentPlayerIndex()].id} rolled a ${roll}!`);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await this.movePlayer(roll);
    this.gameIsRolling.set(false);
  }

  /**
   * Moves the current player based on the dice roll with a visual animation.
   * @param roll The number rolled on the dice.
   */
  // private async movePlayer(roll: number): Promise<void> {
  //   const currentPlayer = this.players()[this.currentPlayerIndex()];
  //   let currentPosition = currentPlayer.position;

  //   // Animate movement square by square
  //   let newPosition = currentPosition;
  //   for (let i = 0; i < roll; i++) {
  //       const nextPos = newPosition + 1;
  //       if (nextPos > 100) {
  //         this.gameMessage.set("You need an exact roll to win!");
  //         this.nextTurn();
  //         return;
  //       }
  //       this.updatePlayerPosition(currentPlayer, nextPos);
  //       this.gameMessage.set(`Player ${currentPlayer.id} moves from ${newPosition} to ${nextPos}.`);
  //       newPosition = nextPos;
  //       await new Promise(resolve => setTimeout(resolve, 300));
  //   }
    
  //   // Check for snakes or ladders
  //   const finalPosition = this.snakeAndLadders.ladders[newPosition] || this.snakeAndLadders.snakes[newPosition] || newPosition;
    
  //   if (finalPosition !== newPosition) {
  //       this.gameMessage.set(`Player ${currentPlayer.id} finds a ${this.snakeAndLadders.ladders[newPosition] ? 'ladder' : 'snake'}!`);
  //       this.updatePlayerPosition(currentPlayer, finalPosition);
  //       await new Promise(resolve => setTimeout(resolve, 500)); // Wait for the visual jump
  //       if (this.snakeAndLadders.ladders[newPosition]) {
  //         await this.generateNarrative(`Player ${currentPlayer.id} landed on a ladder at ${newPosition} and climbed to ${finalPosition}.`, 'Generate a short, exciting story or description about climbing a ladder.');
  //       } else if (this.snakeAndLadders.snakes[newPosition]) {
  //         await this.generateNarrative(`Player ${currentPlayer.id} landed on a snake at ${newPosition} and slipped to ${finalPosition}.`, 'Generate a short, dramatic or unfortunate story or description about slipping down a snake.');
  //       }
  //   }

  //   if (finalPosition === 100) {
  //     this.gameMessage.set(`Player ${currentPlayer.id} wins!`);
  //     await this.generateNarrative(`The game has just ended, and Player ${currentPlayer.id} has won!`, 'Generate a short, celebratory message for a game winner.');
  //     return;
  //   }

  //   // A six gives another turn, unless it was a snake or ladder move
  //   if (roll === 6 && finalPosition === newPosition) {
  //     this.gameMessage.set("You rolled a 6! You get another turn.");
  //     this.gameNarratorMessage.set(null);
  //   } else {
  //     this.nextTurn();
  //   }
  // }

  private async movePlayer(roll: number): Promise<void> {
  const currentPlayer = this.players()[this.currentPlayerIndex()];
  const startPosition = currentPlayer.position;         // remember where we began
  let position = startPosition;

  // Animate movement square-by-square
  for (let i = 0; i < roll; i++) {
    const nextPos = position + 1;
    if (nextPos > 100) {
      this.gameMessage.set("You need an exact roll to win!");
      this.nextTurn();
      return;
    }
    this.updatePlayerPosition(currentPlayer, nextPos);
    // optional: show per-step messages (you can simplify to only show final summary if preferred)
    this.gameMessage.set(`Player ${currentPlayer.id} moves from ${position} to ${nextPos}.`);
    position = nextPos;
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  // Check for snakes or ladders at the landing square
  const ladder = this.snakeAndLadders.ladders[position];
  const snake = this.snakeAndLadders.snakes[position];
  let finalPosition = position;
  let snakeOrLadderMove = false;

  if (ladder !== undefined) {
    finalPosition = ladder;
    this.gameMessage.set(`Player ${currentPlayer.id} found a ladder! Climbs to ${finalPosition}.`);
    await this.generateNarrative(
      `Player ${currentPlayer.id} landed on a ladder at ${position} and climbed to ${finalPosition}.`,
      'Generate a short, exciting story or description about climbing a ladder.'
    );
    snakeOrLadderMove = true;
  } else if (snake !== undefined) {
    finalPosition = snake;
    this.gameMessage.set(`Oh no! Player ${currentPlayer.id} landed on a snake. Slips to ${finalPosition}.`);
    await this.generateNarrative(
      `Player ${currentPlayer.id} landed on a snake at ${position} and slipped to ${finalPosition}.`,
      'Generate a short, dramatic or unfortunate story or description about slipping down a snake.'
    );
    snakeOrLadderMove = true;
  }

  // Apply the jump visually if needed
  if (finalPosition !== position) {
    this.updatePlayerPosition(currentPlayer, finalPosition);
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // FINAL summary message showing the full move from start -> final
  this.gameMessage.set(`Player ${currentPlayer.id} moves from ${startPosition} to ${finalPosition}.`);

  // Win check
  if (finalPosition === 100) {
    this.gameMessage.set(`Player ${currentPlayer.id} wins!`);
    await this.generateNarrative(
      `The game has just ended, and Player ${currentPlayer.id} has won!`,
      'Generate a short, celebratory message for a game winner.'
    );
    return;
  }

  // Six gives another turn only if there was no snake/ladder move
  if (roll === 6 && !snakeOrLadderMove) {
    this.gameMessage.set("You rolled a 6! You get another turn.");
    this.gameNarratorMessage.set(null);
  } else {
    this.nextTurn();
  }
}


  /**
   * Calls the Gemini API to generate a narrative message.
   * @param context The context for the prompt (e.g., snake, ladder, win).
   * @param userQuery The query to send to the LLM.
   */
  private async generateNarrative(context: string, userQuery: string): Promise<void> {
  this.gameIsNarrating.set(true);
  this.gameNarratorMessage.set(null);

  const systemPrompt = "You are an AI game narrator with a playful and exciting tone. Provide a short, single-sentence commentary.";

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  try {
    const response = await fetch('/api/advice', {   // ✅ call your backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (text) {
      this.gameNarratorMessage.set(text);
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (e) {
    console.error("Error during AI narration:", e);
    this.gameNarratorMessage.set("The narrator is speechless!");
  } finally {
    this.gameIsNarrating.set(false);
  }
}


  /**
   * Calls the Gemini API to generate strategic advice.
   */
 public async getAdvice(): Promise<void> {
  this.gameIsAdvising.set(true);
  this.gameAdviceMessage.set(null);

  const currentPlayer = this.players()[this.currentPlayerIndex()];
  const userQuery = `The current player is at position ${currentPlayer.position}. Give a single sentence of witty, slightly unhelpful but encouraging strategic advice.`;
  const systemPrompt = "You are an AI game advisor. Provide a short, witty, and encouraging piece of strategic advice for the current player.";

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  try {
    const response = await fetch('/api/advice', {   // ✅ call your Vercel function
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (text) {
      this.gameAdviceMessage.set(text);
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (e) {
    console.error("Error during AI advice:", e);
    this.gameAdviceMessage.set("My crystal ball is foggy! Just roll the dice.");
  } finally {
    this.gameIsAdvising.set(false);
  }
}


  /**
   * Updates a single player's position in the state.
   * @param playerToUpdate The player object to update.
   * @param newPosition The new position for the player.
   */
  private updatePlayerPosition(playerToUpdate: any, newPosition: number): void {
    this.gamePlayers.update(players => {
      return players.map(p => p.id === playerToUpdate.id ? { ...p, position: newPosition } : p);
    });
    this.updatePlayerPositions();
  }

  /**
   * Advances the game to the next player's turn.
   */
  private nextTurn(): void {
    this.gameCurrentPlayerIndex.update(index => (index + 1) % this.players().length);
  }

  /**
   * Resets the game to its initial state.
   */
  public resetGame(): void {
    this.initializeBoard();
    this.initializePlayers();
    this.gameCurrentPlayerIndex.set(0);
    this.gameDiceValue.set(null);
    this.gameMessage.set("Game has been reset. Roll to begin!");
    this.gameIsRolling.set(false);
    this.gameNarratorMessage.set(null);
    this.gameAdviceMessage.set(null);
  }
}
