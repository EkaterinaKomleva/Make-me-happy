import { Injectable } from '@angular/core';
import { CardI } from '../models/card.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HappyDataService {

  constructor() { }

  getCards(typeOfCards): Observable<CardI[]> {
    switch (typeOfCards) {
      case 'love':
        return this.getLoveCards();
      case 'work':
        return this.getWorkCards();
      case 'travel':
        return this.getTravelCards();
    }
  }

  private getLoveCards(): Observable<CardI[]> {
    return of([
      {
        id: 1,
        name: 'Саша',
        text: 'Сашка только что забрал новый тример и испробовал на себе насадку под 5 мм =)',
        imageUrl: 'assets/images/love-images/photo_2020-04-26_19-01-24.jpg'
      }, {
        id: 2,
        name: 'Я с девченками',
        text: 'Дурачились дома. Захотелось Саше отправить эту фоточку!',
        imageUrl: 'assets/images/love-images/photo_2020-04-06_13-57-40.jpg'
      }, {
        id: 3,
        name: 'Я',
        text: 'Было хорошее настроение, дурачилась для Сашки',
        imageUrl: 'assets/images/love-images/photo_2020-03-18_11-46-29.jpg'
      }, {
        id: 4,
        name: 'Мама с Алисой',
        text: 'Как мы играли в "Друг-утюг"',
        imageUrl: 'assets/images/love-images/photo_2020-03-28_18-49-18.jpg'
      }, {
        id: 5,
        name: 'Сан Саныч',
        text: 'Саня учится кататься на велосипеде в офигенной шапчуле',
        imageUrl: 'assets/images/love-images/photo_2020-03-28_16-03-59.jpg'
      }, {
        id: 6,
        name: 'Сашули',
        text: 'Сашуля для меня фоточки с Саней присылает',
        imageUrl: 'assets/images/love-images/photo_2020-04-02_19-38-02.jpg'
      }, {
        id: 7,
        name: 'Сашка-подушка',
        text: 'Подушечный флэш-моб, в котором я не учавствовала',
        imageUrl: 'assets/images/love-images/photo_2020-04-15_14-51-01.jpg'
      }, {
        id: 8,
        name: 'Папа с Аленой',
        text: 'Аленка любит собирать пазлы, а папа ей помогает со сложными',
        imageUrl: 'assets/images/love-images/photo_2020-03-28_14-51-32.jpg'
      }
    ]);
  }

  private getWorkCards(): Observable<CardI[]> {
    return of([
      {
        id: 1,
        name: 'Core Busines',
        text: 'Наша команда - самая классная и позитивная, особенно этот парень)',
        imageUrl: 'assets/images/work-images/photo_2020-01-15_18-02-19.jpg'
      }, {
        id: 2,
        name: 'Core Busines',
        text: 'Тима тоже ничего себе так',
        imageUrl: 'assets/images/work-images/photo_2020-02-07_11-16-24.jpg'
      }, {
        id: 3,
        name: 'Перед митингом',
        text: 'Единственная фотка, где мы с Сашей вместе)))',
        imageUrl: 'assets/images/work-images/photo_2019-12-20_16-00-03.jpg'
      }, {
        id: 4,
        name: 'Андрей',
        text: 'Андрюха приготовился к перезенташке',
        imageUrl: 'assets/images/work-images/photo_2019-12-20_16-02-43.jpg'
      }, {
        id: 5,
        name: 'Карантин',
        text: 'Скучаю без Саши',
        imageUrl: 'assets/images/work-images/photo_2020-03-20_10-44-03.jpg'
      }, {
        id: 6,
        name: 'Сашка в телевизоре)',
        text: 'Приходили школьники, записывали с нами видос',
        imageUrl: 'assets/images/work-images/photo_2020-04-08_22-04-29.jpg'
      }, {
        id: 7,
        name: 'Гы',
        text: 'Без комментариев!',
        imageUrl: 'assets/images/work-images/photo_2019-12-20_14-59-25.jpg'
      }, {
        id: 8,
        name: 'Новый год!',
        text: 'Праздники проходят в дружной веселой компании',
        imageUrl: 'assets/images/work-images/photo_2019-12-27_18-26-32.jpg'
      }, {
        id: 9,
        name: 'Код',
        text: 'Ну, и как без этого?)',
        imageUrl: 'assets/images/work-images/photo_2020-04-16_12-40-33.jpg'
      }
    ]);
  }

  private getTravelCards(): Observable<CardI[]> {
    return of([
      {
        id: 1,
        name: 'Альпы',
        text: 'Давно мечтаю побывать в Альпах, красивое и тихое местечко',
        imageUrl: 'assets/images/travel-images/alps.jpg'
      }, {
        id: 2,
        name: 'Озеро Байкал',
        text: 'У нас в России тоже есть живописные места',
        imageUrl: 'assets/images/travel-images/baikal.jpg'
      }, {
        id: 3,
        name: 'Китай',
        text: 'На равне с Японией вызывает у меня интерес',
        imageUrl: 'assets/images/travel-images/china.jpg'
      }, {
        id: 4,
        name: 'Греция',
        text: 'Завораживают белоснежные дома на фоне моря',
        imageUrl: 'assets/images/travel-images/greece.jpg'
      }, {
        id: 5,
        name: 'Испания',
        text: 'Очень хочется дотронуться рукой, рассмотреть детали этого знаменитого собора',
        imageUrl: 'assets/images/travel-images/ispania.jpeg'
      }, {
        id: 6,
        name: 'Италия',
        text: 'Обожаю эти уютные уличные кафешки',
        imageUrl: 'assets/images/travel-images/italy.jpg'
      }, {
        id: 7,
        name: 'Япония',
        text: 'Всегда интересовала аутентичная дальневосточная культура и местные пейзажи',
        imageUrl: 'assets/images/travel-images/japan.jpg'
      }, {
        id: 8,
        name: 'Лондон',
        text: 'Хочется покататься на втором этаже знаменитого красного автобуса)',
        imageUrl: 'assets/images/travel-images/london.jpg'
      }
    ]);
  }
}
