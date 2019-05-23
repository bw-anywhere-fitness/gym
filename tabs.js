class TabList {
  constructor(tabElement) {
    this.tabElement = tabElement;

    this.tabData = this.tabElement.dataset.tab;

    if (this.tabData === 'all') {
      this.cards = document.querySelectorAll('.employee__card');
    } else {
      //this.cards = document.querySelectorAll(`.employee__card[data-tab=${this.tabData}]`);
      this.cards = document.querySelectorAll(`.employee__card[data-tab=${this.tabData}]`);
      console.log(this.cards);
    }

    this.cards = Array.from(this.cards).map(function(card) {
      return new TabCard(card);
    });

    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(function(tab) {
      tab.classList.remove('active-tab');
    });

    const cards = document.querySelectorAll('.employee__card');

    cards.forEach(function(card) {
      card.style = 'display:none';
    });

    this.tabElement.classList.add('active-tab');

    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style = 'display:block';
  }
}

let tabs = document.querySelectorAll('.tab');

tabs.forEach(function(tab) {
  return new TabList(tab);
});
