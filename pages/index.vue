<template>
  <main class="main">
    <section class="main__section main__section--mb190 welcome-section">
      <div class="welcome-section__container">
        <div class="welcome-section__info">
          <h1 class="welcome-section__heading">
            Интенсив
          </h1>
          <h3 class="welcome-section__title">
            для девушек и женщин
          </h3>

          <div class="welcome-section__price-box">
            <img src="../assets/img/icons/price-sale.svg" alt="" class="welcome-section__sale-price">
            <div class="welcome-section__price">
              <div class="welcome-section__first">
                10 000 тенге
              </div>
              <div class="welcome-section__second">
                4 990 тенге!
              </div>
            </div>
          </div>

          <button class="welcome-section__btn button" @click="openModal">
            Хочу записаться
          </button>

          <div class="welcome-section__date">
            <span>Дата старта</span>
            <p>23 . 05 . 2022</p>
          </div>
        </div>

        <img src="../assets/img/welcome-img.png" alt="" class="welcome-section__img">
      </div>
    </section>

    <section class="main__section main__section--mb130 quote-section">
      <img src="../assets/img/quote-shadow-left.svg" alt="" class="quote-section__left">
      <img src="../assets/img/quote-shadow-right.svg" alt="" class="quote-section__right">

      <div class="quote-section__container">
        <div class="quote-section__title">
          “ Если бы мы знали секреты счастливой жизни, мы никогда бы не были в поисках прекрасного ”
        </div>

        <svg class="quote-section__border" width="112" height="10">
          <use href="../assets/img/icons.svg#quote-border"></use>
        </svg>
      </div>
    </section>

    <section class="main__section main__section--mb250 prize-section" id="prize">
      <div class="prize-section__container">
        <div class="prize-section__left">
          <div class="prize-section__title">
            Получи свой приз <br>
            прямо сейчас!
          </div>

          <button class="prize-section__btn prize-section__btn--desktop button" @click="openModal">
            Забрать приз
          </button>
        </div>

        <div class="prize-section__right">
          <img src="../assets/img/prize-arrow.svg" alt="" class="prize-section__arrow">
          <img src="../assets/img/wheel-of-fortune.png" alt="" class="prize-section__wheel">
        </div>

        <button class="prize-section__btn prize-section__btn--tab button" @click="openModal">
          Забрать приз
        </button>
      </div>
    </section>

    <section class="main__section speakers-section" id="speakers">
      <div class="speakers-section__container">
        <h2 class="speakers-section__heading">Наши спикеры</h2>

        <div class="speakers-section__splide splide">
          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev speakers-section__arrow speakers-section__arrow--prev">
              <svg width="40" height="40">
                <use href="../assets/img/icons.svg#chevron"></use>
              </svg>
            </button>
            <button class="splide__arrow splide__arrow--next speakers-section__arrow speakers-section__arrow--next">
              <svg width="40" height="40">
                <use href="../assets/img/icons.svg#chevron"></use>
              </svg>
            </button>
          </div>

          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide speaker-card">
                <img src="../assets/img/speakers/1.png" alt="" class="speaker-card__img">

                <div class="speaker-card__info">
                  <div class="speaker-card__box">
                    <div class="speaker-card__name">Анатолий Некрасов</div>
                    <a href="https://www.instagram.com/anatoly_nekrasov/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>anatoly_nekrasov</span>
                    </a>
                    <div class="speaker-card__text">
                      Писатель, психолог.
                      Автор книги «Материнская любовь»
                    </div>
                  </div>
                  <button class="speaker-card__btn button" @click="openModal">
                    Хочу записаться
                  </button>
                </div>

              </li>
              <li class="splide__slide speaker-card">
                <img src="../assets/img/speakers/2.png" alt="" class="speaker-card__img">

                <div class="speaker-card__info">
                  <div class="speaker-card__box">
                    <div class="speaker-card__name">Ашир Раушан Рауанкызы</div>
                    <a href="https://www.instagram.com/raushan.ashir/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>raushan.ashir</span>
                    </a>
                    <div class="speaker-card__text">
                      Психолог. Коуч с 5 летним стажем. Психологическое консультирование и психотерапия качества жизни.
                      Наставник по чакропсихологии.
                    </div>
                  </div>
                  <button class="speaker-card__btn button" @click="openModal">
                    Хочу записаться
                  </button>
                </div>

              </li>
              <li class="splide__slide speaker-card">
                <img src="../assets/img/speakers/3.png" alt="" class="speaker-card__img">

                <div class="speaker-card__info">
                  <div class="speaker-card__box">
                    <div class="speaker-card__name">Асия Фазылова</div>
                    <a href="https://www.instagram.com/asiya_fazylova/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>asiya_fazylova</span>
                    </a>
                    <div class="speaker-card__text">
                      Телесный психолог
                    </div>
                  </div>
                  <button class="speaker-card__btn button" @click="openModal">
                    Хочу записаться
                  </button>
                </div>

              </li>
              <li class="splide__slide speaker-card">
                <img src="../assets/img/speakers/4.png" alt="" class="speaker-card__img">

                <div class="speaker-card__info">
                  <div class="speaker-card__box">
                    <div class="speaker-card__name">Акрам Иманмадинов</div>
                    <a href="https://www.instagram.com/akram_astrolog/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>akram_astrolog</span>
                    </a>
                    <div class="speaker-card__text">
                      Астролог года 2019 по версии глянцевого журнала People and Teens. Является духовным наставником
                      для многих сотен людей
                    </div>
                  </div>
                  <button class="speaker-card__btn button" @click="openModal">
                    Хочу записаться
                  </button>
                </div>

              </li>
              <li class="splide__slide speaker-card">
                <img src="../assets/img/speakers/5.png" alt="" class="speaker-card__img">

                <div class="speaker-card__info">
                  <div class="speaker-card__box">
                    <div class="speaker-card__name">Кунекей Нурлан</div>
                    <a href="https://www.instagram.com/kunekei_finance/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>kunekei_finance</span>
                    </a>
                    <div class="speaker-card__text">
                      Финансовый советник. Финансист-практик с общим стажем 14 лет
                    </div>
                  </div>
                  <button class="speaker-card__btn button" @click="openModal">
                    Хочу записаться
                  </button>
                </div>

              </li>
              <li class="splide__slide speaker-card">
                <img src="../assets/img/speakers/6.png" alt="" class="speaker-card__img">

                <div class="speaker-card__info">
                  <div class="speaker-card__box">
                    <div class="speaker-card__name">Натали Мамедова</div>
                    <a href="https://www.instagram.com/natalie.mamedova/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>natalie.mamedova</span>
                    </a>
                    <div class="speaker-card__text">
                      Психолог - сексолог
                    </div>
                  </div>
                  <button class="speaker-card__btn button" @click="openModal">
                    Хочу записаться
                  </button>
                </div>

              </li>
            </ul>
          </div>
        </div>

        <button class="speakers-section__btn button" @click="openModal">
          Хочу записаться
        </button>
      </div>
    </section>

    <section class="main__section program-section" id="program">
      <div class="program-section__container">
        <div class="program-section__heading">
          Программа интенсива
        </div>

        <div class="program-section__items">
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>04.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Секреты счастливого брака. Дети
              </div>
              <div class="program-section__name">
                Анатолий Некрасов
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>05.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Как энергия влияет на нашу реализацию? Как работать с выгораниями?
              </div>
              <div class="program-section__name">
                Раушан Ашир
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>06.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Как открыть бизнес пошагово? ИП, ТОО. Бухгалтерия
              </div>
              <div class="program-section__name">
                Кунекей Нурлан
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>07.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Вся правда о мужчинах
              </div>
              <div class="program-section__name">
                Акрам
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>08.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Каких женщин выбирают мужчины? Как оставаться всегда желанной?
              </div>
              <div class="program-section__name">
                Натали Мамедова
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>09.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Чем опасно сравнение себя с другими людьми, синдром самозванца и синдром fomo (боязнь упущенных
                возможностей)?
              </div>
              <div class="program-section__name">
                Раушан Ашир
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>10.07.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Как перестать тревожиться и жить в кайф? 7 блоков в теле и их роль
              </div>
              <div class="program-section__name">
                Асия Фазылова
              </div>
            </div>
          </div>
        </div>

        <svg class="program-section__border" width="112" height="10">
          <use href="../assets/img/icons.svg#quote-border"></use>
        </svg>
      </div>
    </section>

    <section class="main__section review-section" id="reviews">
      <div class="review-section__container">
        <div class="review-section__heading">
          Отзывы участников
        </div>

        <div class="review-section__splide splide">
          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev review-section__arrow review-section__arrow--prev">
              <svg width="40" height="40">
                <use href="../assets/img/icons.svg#chevron"></use>
              </svg>
            </button>
            <button class="splide__arrow splide__arrow--next review-section__arrow review-section__arrow--next">
              <svg width="40" height="40">
                <use href="../assets/img/icons.svg#chevron"></use>
              </svg>
            </button>
          </div>

          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @moon_ray.00
                </div>
                <div class="review-card__text">
                  Спасибо большое Аека @aeka.posh за такую возможность❤️😘 Вы собрали лучших спикеров🥹❤️🫶🏻 Вы делаете
                  женщин уверенными в себе и любящих🫶🏻😊 Алла разы болсын❤️ Каждый эфир прям смотрела с удовольствием,
                  записывала, взяла очень много инсайдов✅ Прям чувствую что подсознание изменилось😍🔥 Буду работать над
                  собой и становится лучше❤️😘 Выиграла курс фэйс массажа,буду делать родным и близким😁🙈
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @temirkhanovagaziza
                </div>
                <div class="review-card__text">
                  Доброй ночи, все прослушала, каждый окуительный честно, про стыд, женская мужская энергия Акрам,
                  Венера вспомнила себя девочкой 8 класс, Валентинки, хочется плакать, столько информации, а мне 40. Как
                  будто ничего и не знала. Всегда жду ваш интенсив, все эфиры прослушала по 3 раза, Аека, у вас цены
                  низкие и доступные каждый может позволить, с вами как психологический апгрейд прошёл, вчера уже не как
                  сегодня. Другая я, благодарю, счастья и всего хорошего. Просто благодарю нет слов.
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @delsanto05
                </div>
                <div class="review-card__text">
                  @aeka.posh спасибо вам и вашей команде. То что вы создали такой проект, говорит о многом. Когда все
                  блогеры вокруг продают свои фейковые курсы или товары, вы топите за саморазвитие и совершенствования
                  наших девушек😍 Это просто нереально круто. Я не могу подобрать слова, которые описали мою искреннюю
                  благодарность. С каждым днём, благодаря вам, мы становимся все лучше и лучше. Это дорогого стоит. Ваше
                  внимание и любовь, восхищает👏пусть Аллах береги вас и ваших близких, а также вашу крутую команду.🙌❤️
                  люблю вас безмерно🙌
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @aliya_kh_2111
                </div>
                <div class="review-card__text">
                  @inspiredwomen.kz @aeka.posh @akram_astrolog Эфир очень понравился, это как Акрам с юмором снял с нас
                  розовые очки, полностью с ним согласна где то смеялась прям прикольный вообще. Девочки которые
                  задавали вопросы, надо пересмотреть эфир, потому что все все все было сказано, надо все глубже понять.
                  Рассказала мужу что много интересного прослушала, он заинтересовался и я рассказала, как раз тема
                  такая что мужья тоже думаю должны если даже не прослушать, но услышать от нас. Благодарю за эфир🙌🏻
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @shyryn88888
                </div>
                <div class="review-card__text">
                  Благодарю за курс, столько полезной информации получила за нормальную сумму🔥❤️Как говорит психолог
                  Акбота, если мы не вырастим с позиции ребёнка, не будем взрослыми тогда и будем зарабатывать детские
                  деньги, а ребёнку достаточно если погладять по голове и скажут ты хорошая😂😢@womenscommunity.kz
                  @aeka.posh вы одни из лучших которых я встречала🌈🦋🌹🌹🌹🌹🌹🌹🌹🌹🌹
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @araysukhanova
                </div>
                <div class="review-card__text">
                  Офигенный эфир😍🔥👏 спасибо большое за инфу🙏🏼 до этого проходила разные курсы, но этот интенсив
                  прям в яблочко🫶🏼 @aeka.posh спасибо вам большое за курс👏 пусть вам вернётся в стократ больше🙏🏼 и
                  сейчас для себя поняла, что если какой то курс не зашёл, то не стоит разочаровываться))) а все равно
                  идти и пробовать)) вот честно столько курсов было))) но видимо я была не готова)) а сейчас
                  обстоятельства жизни поменялись и очень все доступно и понятно стало мозгу😍😍😍🫶🏻
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @snzgm
                </div>
                <div class="review-card__text">
                  Было оооочень интересно😍😍😍 Так приятно💗 Все интенсивы были просто топ💣💣💣💣 Интенсив изменил
                  наши мысли😍😍😍😍 Я просто восторге😭😭😭 Я просто в расслабоне🔥🔥🔥
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @zhanar111293
                </div>
                <div class="review-card__text">
                  Спасибо @aeka.posh , что делаете для женского пола такие интенсивы👏 Все только благодарны, а значит
                  все не зря🤍 Сильные женщины должны поддерживать друг друга, и вы делаете это🫰🏼 Интенсив закончился,
                  но для нас открыты новые эксперты и мы можем дальше познавать себя и развиваться 🌸👍🤍
                </div>
              </li>
            </ul>
          </div>

        </div>

        <button class="review-section__btn button" @click="openModal">
          Хочу так же
        </button>
      </div>
    </section>

    <Modal @close="closeModal" :class="{'modal--active' : loadedModalState}"/>
  </main>
</template>

<script>
import {Splide} from '@splidejs/splide';
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      modalState: false
    };
  },
  methods: {
    openModal() {
      this.$store.dispatch('setModalState', true)
    },
    closeModal() {
      this.$store.dispatch('setModalState', false)
    }
  },
  computed: {
    loadedModalState() {
      return this.$store.getters.loadedModalState
    }
  },
  mounted() {
    new Splide('.speakers-section__splide', {
      classes: {
        pagination: 'splide__pagination speakers-section__pagination',
        page: 'splide__pagination__page speakers-section__pagination-page',
      },
    }).mount();

    new Splide('.review-section__splide', {
      perPage: 3,
      gap: 76,
      classes: {
        pagination: 'splide__pagination review-section__pagination',
        page: 'splide__pagination__page review-section__pagination-page',
      },
      breakpoints: {
        1279: {
          perPage: 2,
        },
        767: {
          perPage: 1,
        }
      }
    }).mount();
  }
};
</script>

<style>

</style>

<style lang="scss">
</style>
