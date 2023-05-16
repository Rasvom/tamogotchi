const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,
  depression: 5,
  getStatus: function () {
    return this.meal || this.energy || this.mood || this.depression <= 0
      ? `${this.name} умер :(`
      : `Имя: ${this.name}, Еда: ${
          this.meal < 3 ? "Я голоден" : "Я не голоден"
        }, Энергия: ${
          this.energy < 3 ? "Я хочу спать" : "Я не хочу спать"
        }, Настроение: ${this.mood < 3 ? "Мне скучно" : "Мне весело"}`;
  },
  setName: function (name) {
    this.name = name;
  },
  eat: function () {
    if (this.meal < 5) {
      this.mood++;
      this.emptiness();
    }else{
        this.mood--;
        this.emptiness();
    }
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }else{
        this.meal--;
    }
    
  },
  play: function () {
    if (this.meal < 5) {
      this.mood++;
    }else{
        this.energy--;
    }
  },
  emptiness: function () {
    this.depression--;
  },
};
