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

          <div class="welcome-section__sale-row">
            <span v-for="i in 20">50% выгоды</span>
          </div>

          <div class="welcome-section__price-box">
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
            <p>03 . 08 . 2022</p>
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
                    <div class="speaker-card__name">Айсулу Ахимова</div>
                    <a href="https://www.instagram.com/aisulu_ahimova_/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>@aisulu_ahimova_</span>
                    </a>
                    <div class="speaker-card__text">
                      Психолог, теле и радиоведущая, нумеролог
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
                    <div class="speaker-card__name">Раушан Ашир</div>
                    <a href="https://www.instagram.com/raushan.ashir/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>@raushan.ashir</span>
                    </a>
                    <div class="speaker-card__text">
                      Коуч, психолог, Чакролог
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
                    <div class="speaker-card__name">Акбота Аканова</div>
                    <a href="https://www.instagram.com/akanova.psy/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>@akanova.psy</span>
                    </a>
                    <div class="speaker-card__text">
                      Эксперт в сфере психологии. Квалифицированный психолог, корпоративный психолог и социолог
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
                    <div class="speaker-card__name">Акгул Абдали</div>
                    <a href="https://www.instagram.com/akgul.abdali/"
                       target="_blank"
                       class="speaker-card__inst">
                      <svg width="16" height="16">
                        <use href="../assets/img/icons.svg#inst"></use>
                      </svg>
                      <span>@akgul.abdali</span>
                    </a>
                    <div class="speaker-card__text">
                      Психолог-психотерапевт.
                      Магистр психологии.
                      Семейный психолог. Является членом Американской Психологической Ассоциации (APA)
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
              <span>03.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Важность энергии в семье. Почему есть семьи богатые и бедные?
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
              <span>04.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Диагностика, как вы себя чувствуете на 3-х уровнях
              </div>
              <div class="program-section__name">
                Акбота Аканова
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>05.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Как управлять своим настроением? Техники из Когнитивно-поведенческой психотерапии. (КПТ)
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
              <span>06.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Как непринятие родителей влияет на все сферы жизни. И что с этим делать? (+ медитация)
              </div>
              <div class="program-section__name">
                Акгул Абдали
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>07.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Личные границы. Как не быть использованной
              </div>
              <div class="program-section__name">
                Акбота Аканова
              </div>
            </div>
          </div>
          <div class="program-section__item">
            <div class="program-section__date">
              <svg width="74" height="74">
                <use href="../assets/img/icons.svg#date-star"></use>
              </svg>
              <span>08.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                Soft skills
                Главные мягкие навыки - которые могут помочь во всех сферах жизни.
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
              <span>09.08.2022</span>
            </div>
            <div class="program-section__info">
              <div class="program-section__text">
                День рождения. В какие года и как правильно отмечать этот праздник
              </div>
              <div class="program-section__name">
                Айсулу Ахимова
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
                  @kimalena_nails_tdk
                </div>
                <div class="review-card__text">
                  Аёка , оооoxx Аёка что вы делаете ????😄😘 спасибо огромное, от чистого сердца Вам и вашей команде❤️
                  ваши проекты , лучшие. Конечно же не в первый раз я с вами и не в последний🌹 была с вами на встрече
                  после интенсива предыдущего.
                  вы потрясающая, вы мативатор 100% @aeka.posh. Спасибо за каждый эфир, за каждые знания , даже без
                  ваших сториз уже не интересно заходить в Инстаграмм❤️ ваши советы, взгляд на жизнь. Нет пафоса , нет
                  высокомерности и т.д просто человек от души делает свои проекты во благо Женщин , которые кто то
                  боялся , кто то ждал чего то чтобы изменить себя , полюбить себя , начаинать делать и создавать саму
                  себя самой !!! И в голове много чего меняется в лучшую сторону после эфиров , много чего запоминается
                  как вот раз и навсегда ♾️ спасибо огромное❤️ жду следующий интенсив.
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @abuova.aa196
                </div>
                <div class="review-card__text">
                  🔥 Очень рада что приобрела данный интенсив! И спасибо господину @anatoly_nekrasov за такую ценную
                  информацию! К сожалению в прямом эфире не смогла послушать, но дома в полной тишине прослушала Вас!
                  Слушать вас одно удовольствие, и согласна со многими что час лекций прошёл будто минута! Спасибо
                  команде интенсива что для нас вы пригласили такого человека с Большой буквы и с таким багажом
                  знаний😍🔥
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @_uli.os_
                </div>
                <div class="review-card__text">
                  Один час пролетел мгновенно. Я даже не заметила.😅Столько полезной и нужной информации… Благодарю вас
                  @anatoly_nekrasov за эфир! Обязательно прочту ваши книги!
                  Очень рада, что приобрела этот интенсив! Отдельная благодарность @aeka.posh , за то что вы
                  предоставили нам возможность, послушать такого мудрого специалиста в своем деле !
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @zhanar111293
                </div>
                <div class="review-card__text">
                  @aeka.posh большая благодарность вам от всего женского пола, что помогаете женщинам быть в ресурсе,
                  быть самой-самой, любить себя и быть счастливой. Я думаю многие взяли для себя что-то, каждый раз
                  радуете новыми темами и подарками, будьте счастливы🤲🏻👏🏻😘💐
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @aliya_kh_2111
                </div>
                <div class="review-card__text">
                  @kunekei_finance спасибо. Всегда действительно советует ничего не утаивая , у меня на прошлом и на
                  этом вышел экстра интенсив, я постоянно вспоминаю ее советы , записи пересматриваю , начали с мужем
                  копить на отдых , потому что сразу выделить нужную сумму не получается , а по чуть чуть откладывать не
                  заметно. Благодарю за эфир @aeka.posh @womenscommunity.kz
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @delsanto05
                </div>
                <div class="review-card__text">
                  Я просто обожаю @kunekei_finance. У вас всегда все четко и по плану. Я прям себя дисциплинирую, когда
                  дело касается финансов вспоминаю ваши советы🫶🏻 после ваших эфирах начала вести учёт расходов и
                  доходов, сейчас очень серьезно отношусь к этому. Закрыла каспи РЭД😂 ура, прям гора с плеч. Excel знаю
                  немного, но какие то непонятные моменты смотрю в ютубе. Покупки только осознанные, я очень тщательно
                  думаю и анализирую, насколько это вещь нужна сейчас. Появляется четкое понимание🙌 сейчас думаю над
                  увеличением доходов❤️ спасибо вам большое, вы прям даёте такой пинок под зад 😁утром когда лень
                  просыпаться, вспоминаю вас😜 (9 и сразу встаю) время деньги) нужно действовать🙌
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @assem_sunny
                </div>
                <div class="review-card__text">
                  @aeka.posh Спасибо за такую возможность❤️ Анатолий Некрасов , благодарю вас за такой поучительный
                  эфир💞 Считаю что, это такая возможность послушать вас, не просто послушать, а понимать что, этот эфир
                  вы просвещаете нам, всем женщинам этой группы 🙂Действительно задумалась над счастьем и не
                  зависимостью 🙈 Насчёт профессий и диплома затронули важную и актуальную тему на сегодняшний день 👍🏻
                  А ещё отдельное спасибо за книгу♥️ Уже отправили на почту👏
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @any_zhailybaevna
                </div>
                <div class="review-card__text">
                  Большое спасибо за этот эфир😍💐 Я мама двоих детей, и про воспитание детей так четко сказано, теперь
                  надо работать над этим, два раза пересмотрела эфир😍❤️ огромное спасибо @aeka.posh за возможность
                  расти, особенно мамам в декрете это так необходимо👍 и про отношение с супругом я многое поняла буду
                  работать над этим теперь❤️
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @ainura_s1984
                </div>
                <div class="review-card__text">
                  @aeka.posh @womenscommunity.kz Аека, благодарю😭😭😭 Я и не мечтала увидеть, услышать в эфире
                  А.Некрасова. Сначала марафонов и Интенсивов ваших я не пропускаю ни один. И каждый раз удивляете своей
                  заботой о каждой из нас💔💔💔 Кстати с литературой A. Некрасова познакомилась после ваших
                  рекомендации.Реально читаемо так просто и понятно. Эфир потрясающий , просмотрела одним
                  дыханием❤️❤️❤️😍😍😍😍😍😍😍Супер, благодарю. Жду следующие эфиры, хотя уже после первого столь
                  окрылённая🥰🥰🥰🥰🥰💐💐💐🥳🎉🎉🎉🥳
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @delsanto05
                </div>
                <div class="review-card__text">
                  😍😍😍😍 @aeka.posh @anatoly_nekrasov спасибо вам огромное🙌 это был просто бомбический эфир. Все так
                  легко и доступно. Аека вы просто нереальная😍 я так мечтала эфир с ним🤗 вы прям как будто услышали
                  мои молитвы. Анатолий действительно такой счастливой и такой открытый всему миру человек🙌 от вас
                  такая прям энергетика приятная, вас слушать можно вечно❤️ я безмерно благодарна вам👏 каждые ваши
                  слова так откликались мне, я понимаю, что родители по сей день контролируют🙌 это я осознала после
                  ваших слов. Теперь буду смотреть ваши эфиры, для меня это как бальзам на душу❤️ теперь мечтаю с вами
                  встретится в живую🫶🏻 надеюсь это реализуется👏
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
