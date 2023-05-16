const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus: function () {
    let eat = this.meal < 3 ? "Я голодный" : "Я не голодный";
    let sleep = this.energy < 3 ? "Я хочу спать" : "Я не хочу спать";
    let play = this.mood < 3 ? "Мне скучно" : "Мне весело";

    if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
      return `${this.name} умер :(`
    }else{
    return `Имя: ${eat}, Энергия: ${sleep}, Настроение: ${play}`
    }
  },
  setName: function (name) {
    this.name = name;
  },
  eat: function () {
    if (this.meal < 5) {
      this.mood++;
    }
    this.mood--;
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  play: function () {
    if (this.meal < 5) {
      this.mood++;
    }
    this.energy--;
  },
};
