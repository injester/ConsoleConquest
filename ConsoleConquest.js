const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let points = 0;
let hp = 100;
let baseHP = 100;
let baseDamageModifier = 0;
let level = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fightmonster() {
    let monsterHP = 100;
    const monsterDamage = Math.floor(Math.random() * 4) + 5; 

    while (hp > 0 && monsterHP > 0) {
        console.log("╔════════════════════════════════════════════════════════════╗");
        console.log("║                       BATTLE STARTS!                       ║");
        console.log("╠════════════════════════════════════════════════════════════╣");
        console.log("║               🛡️❤️ Battle in Progress ❤️🛡️                 ║");
        console.log("╠════════════════════════════════════════════════════════════╣");
        console.log("║                                                            ║");
        console.log(`║   Your HP: ${hp}                Monster's HP: ${monsterHP}            ║`);
        console.log("║                                                            ║");
        console.log("╠════════════════════════════════════════════════════════════╣");
        console.log("║                                                            ║");
        console.log("║    Choose your action:                                     ║");
        console.log("║    1. Run                                                  ║");
        console.log("║    2. Charge energy                                        ║");
        console.log("║    3. Fight                                                ║");
        console.log("║                                                            ║");
        console.log("╚════════════════════════════════════════════════════════════╝");
      let playerAction = await askQuestion('👉 Enter your choice (1-3): ');
  
      switch (playerAction) {
        case '1':
          console.log('🏃‍♂️ You attempt to run away from the monster.');
          if (Math.random() < 0.5) {
            console.log('🏃‍♂️💨 You successfully escape!');
            return;
          } else {
            hp -= monsterDamage;
            console.log(`💥 The monster attacks you and deals ${monsterDamage} damage.`);
            console.log('🚫 The monster catches up to you!');
          }
          break;
        case '2':
          console.log('🧘‍♂️ You focus your energy, preparing for the next attack.');
          hp -= monsterDamage;
          console.log(`💥 The monster attacks you and deals ${monsterDamage} damage.`);
          console.log('🚫 The monster catches up to you!');
          baseDamageModifier += 15;
          break;
        case '3':
          const playerDamage = Math.floor(Math.random() * 10) + 1 + Math.floor(baseDamageModifier * 0.1);
          monsterHP -= playerDamage;
          console.log(`⚔️ You attack the monster and deal ${playerDamage} damage.`);
          if (monsterHP > 0) {
            console.log(`💥 The monster attacks you and deals ${monsterDamage} damage.`);
            hp -= monsterDamage;
            console.log(`❤️ Your HP: ${hp}`);
            console.log(`🐲 Monster's HP: ${monsterHP}`);
          }
          break;
        default:
          console.log('❌ Invalid choice.');
      }
    }
    
    if (hp > 0) {
      points += 3;
      level += 1;
      console.log("╔════════════════════════════════════════════════╗");
      console.log("║                    VICTORY!                    ║");
      console.log("╠════════════════════════════════════════════════╣");
      console.log("║   🎉 You defeated the monster!                 ║");
      console.log("║   🏆 You gained 3 points!                    ║");
      console.log("║                                                  ║");
      console.log(`║   ❤️ Your HP: ${hp}                              ║`);
      console.log(`║   💰 Points: ${points}                              ║`);
      console.log("║                                                ║");
      console.log("╚════════════════════════════════════════════════╝");
    } else {
      console.log("╔══════════════════════════════════════════════════════╗");
      console.log("║               YOU WERE DEFEATED!               ║");
      console.log("╠════════════════════════════════════════════════╣");
      console.log("║   💀 You were defeated by the monster. Game over! 💀║");
      console.log("║                                                ║");
      console.log("║   You must rise and try again!                 ║");
      console.log("║                                                ║");
      console.log("╚════════════════════════════════════════════════╝");
    }
  

    await main();
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function fightmambo() {
  let monsterHP = 200;
  const monsterDamage = Math.floor(Math.random() * 8) + 6; 

  while (hp > 0 && monsterHP > 0) {
      console.log("╔════════════════════════════════════════════════════════════╗");
      console.log("║                       BATTLE STARTS!                       ║");
      console.log("╠════════════════════════════════════════════════════════════╣");
      console.log("║               🛡️❤️ Battle in Progress ❤️🛡️                 ║");
      console.log("╠════════════════════════════════════════════════════════════╣");
      console.log("║                                                            ║");
      console.log(`║   Your HP: ${hp}                Monster's HP: ${monsterHP}            ║`);
      console.log("║                                                            ║");
      console.log("╠════════════════════════════════════════════════════════════╣");
      console.log("║                                                            ║");
      console.log("║    Choose your action:                                     ║");
      console.log("║    1. Run                                                  ║");
      console.log("║    2. Charge energy                                        ║");
      console.log("║    3. Fight                                                ║");
      console.log("║                                                            ║");
      console.log("╚════════════════════════════════════════════════════════════╝");
    let playerAction = await askQuestion('👉 Enter your choice (1-3): ');

    switch (playerAction) {
      case '1':
        console.log('🏃‍♂️ You attempt to run away from the Mambo.');
        if (Math.random() < 0.5) {
          console.log('🏃‍♂️💨 You successfully escape!');
          return;
        } else {
          hp -= monsterDamage;
          console.log(`💥 Mambo attacks you and deals ${monsterDamage} damage.`);
          console.log('🚫 Mambo catches up to you!');
        }
        break;
      case '2':
        console.log('🧘‍♂️ You focus your energy, preparing for the next attack.');
        hp -= monsterDamage;
        console.log(`💥 Mambo attacks you and deals ${monsterDamage} damage.`);
        console.log('🚫 Mambo catches up to you!');
        baseDamageModifier += 18;
        break;
      case '3':
        const playerDamage = Math.floor(Math.random() * 10) + 1 + Math.floor(baseDamageModifier * 0.1);
        monsterHP -= playerDamage;
        console.log(`⚔️ You attack Mambo and deal ${playerDamage} damage.`);
        if (monsterHP > 0) {
          console.log(`💥 The monster attacks you and deals ${monsterDamage} damage.`);
          hp -= monsterDamage;
          console.log(`❤️ Your HP: ${hp}`);
          console.log(`🐲 Monster's HP: ${monsterHP}`);
        }
        break;
      default:
        console.log('❌ Invalid choice.');
    }
  }
  
  if (hp > 0) {
    points += 10;
    level += 1;
    console.log("╔════════════════════════════════════════════════╗");
    console.log("║                    VICTORY!                    ║");
    console.log("╠════════════════════════════════════════════════╣");
    console.log("║   🎉 You defeated the monster!                 ║");
    console.log("║   🏆 You gained 10 points!                    ║");
    console.log("║                                                  ║");
    console.log(`║   ❤️ Your HP: ${hp}                              ║`);
    console.log(`║   💰 Points: ${points}                              ║`);
    console.log("║                                                ║");
    console.log("╚════════════════════════════════════════════════╝");
  } else {
    console.log("╔══════════════════════════════════════════════════════╗");
    console.log("║               YOU WERE DEFEATED!               ║");
    console.log("╠════════════════════════════════════════════════╣");
    console.log("║   💀 You were defeated by the monster. Game over! 💀║");
    console.log("║                                                ║");
    console.log("║   You must rise and try again!                 ║");
    console.log("║                                                ║");
    console.log("╚════════════════════════════════════════════════╝");
  }


  await main();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



async function shop() {
  console.log("╔════════════════════════════════════════════════════════╗");
  console.log("║                      MASTERY SHOP                      ║");
  console.log("║────────────────────────────────────────────────────────║");
  console.log(`║   Your HP: ${hp}                Points: ${points}               ║`);
  console.log("║────────────────────────────────────────────────────────║");
  console.log(`║   Base HP: ${baseHP}           Base Damage: ${baseDamageModifier}                ║`);
  console.log("║                                                        ║");
  console.log("║   Choose a weapon to purchase:                         ║");
  console.log("║   1. Staff (Cost: 50 points) - Increases HP by 100,    ║");
  console.log("║      increases damage by 20%                           ║");
  console.log("║   2. Sword (Cost: 50 points) - Increases HP by 200,    ║");
  console.log("║      increases damage by 10%                           ║");
  console.log("║   3. Bow (Cost: 50 points) - Increases HP by 150,      ║");
  console.log("║      increases damage by 15%                           ║");
  console.log("║   4. Axe (Cost: 100 points) - Increases HP by 250,      ║");
  console.log("║      increases damage by 30%                           ║");
  console.log("║                                                        ║");
  console.log("╚════════════════════════════════════════════════════════╝");

  let choice = await askQuestion('💰 Enter your choice (1-4): ');

  switch (choice) {
    case '1':
      if (points >= 50) {
        baseHP = 200;
        baseDamageModifier += 20;
        hp += 100;
        baseDamageModifier += 20;
        points -= 50;
        console.log('🏹 You purchased a staff. Your base HP increased by 100 and your base damage increased by 20%.');
      } else {
        console.log('❌ You do not have enough points to purchase this item.');
      }
      break;
    case '2':
      if (points >= 50) {
        baseHP = 400;
        baseDamageModifier += 10;
        hp += 200;
        baseDamageModifier += 10;
        points -= 50;
        console.log('⚔️ You purchased a sword. Your base HP increased by 200 and your base damage increased by 10%.');
      } else {
        console.log('❌ You do not have enough points to purchase this item.');
      }
      break;
    case '3':
      if (points >= 50) {
        baseHP = 300;
        baseDamageModifier += 15;
        hp += 150;
        baseDamageModifier += 15;
        points -= 50;
        console.log('🏹 You purchased a bow. Your base HP increased by 150 and your base damage increased by 15%.');
      } else {
        console.log('❌ You do not have enough points to purchase this item.');
      }
      case '4':
        if (points >= 100) {
          baseHP = 500;
          baseDamageModifier += 30;
          hp += 250;
          baseDamageModifier += 30;
          points -= 100;
          console.log('🏹 You purchased a axe. Your base HP increased by 250 and your base damage increased by 30%.');
        } else {
          console.log('❌ You do not have enough points to purchase this item.');
        }
      break;
    default:
      console.log('❌ Invalid choice.');
  }
}

function sleep() {
    if (points >= 1) {
      console.log('💤 You decide to rest and regain your health.');
      hp = baseHP;
      points -= 1;
    } else {
      console.log('❌ You do not have enough points to rest.');
    }
  }
  


function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  while (true) {
    console.log("╔════════════════════════════════════════════════════════╗");
    console.log("║                        GAME CONSOLE                    ║");
    console.log("║────────────────────────────────────────────────────────║");
    console.log("║   HP: " + hp + "                Points: " + points + "                     ║");
    console.log("║────────────────────────────────────────────────────────║");
    console.log("║                                                        ║");
    console.log("║    1. Mastery                2. Wild                   ║");
    console.log("║    3. Sleep                  4. Close Game             ║");
    console.log("║                                                        ║");
    console.log("╚════════════════════════════════════════════════════════╝");

    let choice = await askQuestion('Enter your choice (1-4): ');

    switch (choice) {
      case '1':
        await shop();
        break;
      case '2':
        await fight();
        break;
      case '3':
        sleep();
        break;
      case '4':
        console.log('🚪 Closing the game...');
        rl.close();
        return;
      default:
        console.log('❌ Invalid choice.');
    }
  }
}

async function fight() {
  while (true) {
    console.log("╔════════════════════════════════════════════════════════╗");
    console.log("║                        GAME CONSOLE                    ║");
    console.log("║────────────────────────────────────────────────────────║");
    console.log("║   HP: " + hp + "                Level: " + level + "                     ║");
    console.log("║────────────────────────────────────────────────────────║");
    console.log("║                                                        ║");
    console.log("║    1. fight monster                                    ║");
    console.log("║    2. fight mambo (lvl. 50)                                      ║");
    console.log("║    3. back to home                                                    ║");
    console.log("║                                                        ║");
    console.log("╚════════════════════════════════════════════════════════╝");

    let choice = await askQuestion('Enter your choice (1-4): ');

    switch (choice) {
      case '1':
        await fightmonster();
        break;
      case '2':
        if (level >= 50) {
          await fightmambo();
        } else {
          console.log('❌ You do not have enough levels to fight Mambo.');
        }
      break;
      case '3':
        return;
      default:
        console.log('❌ Invalid choice.');
    }
  }
}

main().then(() => {
  rl.close();
});
