const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK = 17;
const choosenMaxLife = 100;
let monsterHealth = choosenMaxLife;
let playerHealth = choosenMaxLife;
const healthRefill = 20;
const hasBonusLife = true;

adjustHealthBars(choosenMaxLife);

function endRound(){
	const initalPlayerHealth = playerHealth;
	const playerdamge = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  	playerHealth -= playerdamge
  	

  	if (playerHealth <= 0 && hasBonusLife){
  		hasBonusLife = false;
  		removeBonusLife();
  		playerHealth = initalPlayerHealth;
  		setPlayerHealth(initalPlayerHealth);
  		alert('You are lucky you made it here!')
  	}

  	if (monsterHealth <= 0 && playerHealth > 0){
    alert('You have just won!')
  	}else if (playerHealth <= 0 && monsterHealth > 0){
    alert('You lost')
  	}else if(playerHealth <= 0 && monsterHealth <= 0){
  	alert('This ended as a draw')
  	}
}

function attackMonster(mode){
	let maxDamage;
	if (mode === 'ATTACK'){
		maxDamage = ATTACK_VALUE;
	}else{
		maxDamage = STRONG_ATTACK;
	}
	const damage = dealMonsterDamage(maxDamage)
  	monsterHealth -= damage
  	endRound()
}

function attackHandler(){
 	attackMonster('ATTACK')
}


function strongAttackHandler(){
	attackMonster('STRONG_ATTACK')
}


function healPlayerHandler(){
	let healValue;
	if (playerHealth >= choosenMaxLife - healthRefill){
		alert('You cannot heal at this point')
		healValue = choosenMaxLife - playerHealth;
	}else{
		healValue = healthRefill
	}
	increasePlayerHealth(healthRefill)
	playerHealth += healthRefill;
	endRound()
}


attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)