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
          “ Счастье женщины начинается с ее любви
          к самой себе ”
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
                      Психолог. Коуч с 5 летним стажем. Психологическое консультирование и психотерапия качества жизни. Наставник по чакропсихологии.
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
                      Астролог года 2019 по версии глянцевого журнала People and Teens. Является духовным наставником для многих сотен людей
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
                      <span>natalie.mamedov</span>
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
                Как перестать тревожиться и жить в кайф? 7 блоков в теле и их роль
              </div>
              <div class="program-section__name">
                Асия Фазылова
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
                Чем опасно сравнение себя с другими людьми, синдром самозванца и синдром fomo (боязнь упущенных возможностей)?
              </div>
              <div class="program-section__name">
                Раушан Ашир
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
                  @dlya.myself
                </div>
                <div class="review-card__text">
                  @womenscommunity.kz @aeka.posh Спасибо за бомбический Интенсив🚀🚀🚀. На самом деле, раннее я не знала
                  Айым, просто искала какой-нибудь марафон для перезагрузки, и тут наткнулась. Сначала была скептично
                  настроена😅, думала что может быть за такую цену вообще)) Рада, что обломалась😅 Курс продуман от и
                  до, выбор спикеров, актуальных тем, да и вообще круто, что наши девочки так прокачаны🔥🔥🔥. Интенсив
                  превзошёл все мои ожидания! Я получила ответы на все свои вопросы, в том числе были не лёгкие запросы
                  экспертам)) Я обновила все свои клеточки в мозгу, мне было приятно слушать спикеров, и где-то даже
                  как-то не соглашаться, потому что точка зрения эксперта всегда обоснована👌🏻, были интересны вопросы
                  со стороны участников, я не знала ни одного спикера до «Интенсива», но после я открыла для себя
                  столько интересных личностей) На счёт цены, не раз повторяла, что 10'000 за это всё, считай бесплатно.
                  Спасибо всем кто работал над ним все эти дни. Однозначно пересмотрю ещё. Прокачалась просто 🚀
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @raslisma
                </div>
                <div class="review-card__text">
                  @aeka.posh спасибо за этот мощный интенсив. Я мама в декрете 5 лет уже. И самооценка своих
                  способностей, себя низко падала вниз. Я стала неприятна самой себе. Пост претензии к мужу и т.д. за
                  эти 2 недели я раскрыла саму себя. Я вышла из рамок общества. Я начала свой мини бизнес с нуля. Без
                  вложений. И оказывается это людям нужно. Интересно. У меня прям журегим дукилдеп. ❤️❤️❤️ Почувствовала
                  себя важной, нужной. Айым рахмееет саган жаным сол🔥🔥🔥 я прорабатывала каждый прямой эфир. Я
                  простила тех кого долгое время не могла простить. Я ленивая попа каждый день начала делать уход.
                  Любить себя.
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @abnv.17
                </div>
                <div class="review-card__text">
                  спасибо уважаемая @aeka.posh Вам за супер интенсив! время пролетело так быстро, каждый вечер с
                  нетерпением ждала эфиры, слушала, записывала, и переслушивала вновь! спасибо моей маме, которая купила
                  и направила на этот интенсив! я была потеряна, руки опускались, т.к. у меня особенный ребенок, никак
                  не могла принять этот факт, было очень больно, но после Вашего интенсива я прошла мощную
                  трансформацию, начала смотреть на жизнь по другому, не устану Bас @aeka.posh благодарить, благодарна
                  всем спикерам, от чистого сердца!🙌изменили мои взгляды на жизнь, получила заряд мощной положительной
                  энергии, теперь только вперед к целям и мечтам!!!!🙌❤️🔥@aeka.posh Самая лучшая!🔥
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @aidana.sweets
                </div>
                <div class="review-card__text">
                  @aeka.posh спасибо большое❤️ Вы для меня как сестра🥰 мощная, красивая😍 Блогодарю за такой суперский
                  интенсив🥲😍 Столько знании получили❤️ Кто участвовал, кто смотрел не пропуская эфиры думаю у всех
                  классыные эмоции💖 мен ойлағаннан да көп информация алдым деп айта аламын💫 Это так круто когда есть
                  такие эксперты В КЗ❕ Есть к чему научить, подсказать🥨 Хотя я не замужем и мне только 19💔 я о многом
                  узнала как воспитать своих будущих детей, как любит себя☺️ спасибооо можно говорить бесконечно
                  😍👏🏻🔥❤️🙌
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @_dariya_usseinova
                </div>
                <div class="review-card__text">
                  Огромная благодарность @aeka.posh и всей её команде, всем спиером-экспертам за знания, за практики, за
                  то, что просто даёте возможность найти себя, узнать большее, за то, что делаете нас счастливее😍,
                  умнее😉.С каждого продукта Аеки беру себе лучшее, использую в повседневной жизни, становлюсь лучшей
                  версией себя, иду вперёд к своим целям. Можно писать бесконечные слова благодарности🥰🥰🥰 Просто
                  обажаю❤️❤️❤️

                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  @aiamasskar
                </div>
                <div class="review-card__text">
                  @aeka.posh жаным Аека🥰❤️ осындай күшті интенсив үшін көп көп рахмет🥺🥺🥺. Сіздің арқаңызда өмірге
                  деген адамдарға деген көзқарасым өзгерді! Күн сайын сізді қарап, мотивация алып өз ісімді бастаған
                  болатынмын! Жайлап бәрі өзгеріп келятыр! Альхамдулиллях деймін, ішкі дүниемнің өзгеруіне сіздің
                  көмегіңіз көп тиді. Бұрынмен "менмен" қазіргі мен екі түрліғой! Неткен керемет адамсыз! 😍❤️🥰🥰,
                  барлық интенсивыңызға катысып келе жатырмын,бәрі де күшті, осы сонғысы вообще взрыв болдығой! Енді
                  бәрін по полочкам қойып, өзіммен жұмыстанамын! Әр спикер өз істерінің маманы, бәрінің эфиры жүрекке де
                  миға да керемет жетті. Оларға мың алғыс…Түн жамылып жазып отырмын, балам ұқтағасын спокойно отырып.
                  Алғысым шексіз, Алла екі дүниенің бақытын нәсіп етсін! Мен сізді жақсы көремін
                  🥺🥺🥺🥺🥰🥰🥰❤️❤️❤️❤️❤️❤️әрдайым шынайысыз!
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  Асем
                </div>
                <div class="review-card__text">
                  @aeka.posh Не устаю благодарить вас👏🏻 Все что вы делаете и стараетесь ради женщин, это просто не
                  описать словами❤️🔥 Вы и ваша команда огромные молодцы😍 Не прощаемся🙌🏻 B этом интенсиве было все
                  что нужно нам , все актуальные темы затронули начиная от мышления закончили нашим
                  гардеробом👏🏻👏🏻👏🏻 @womenscommunity.kz ❤️
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  Эрика Бериковна
                </div>
                <div class="review-card__text">
                  @womenscommunity.kz @aeka.posh спасибо просто огроооомное за Интенсив. Это было🔥🔥🔥 Сколько же всего
                  лично я получила от интенсива🤩. Сделала ген. уборку и в финансах и в душе, и в личной жизни, и в
                  стиле. Короче, проект бомба!
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  assem_sunny:
                </div>
                <div class="review-card__text">
                  Так быстро пролетели 17 дней😮 Хотела посмотреть что же завтра у нас, потом дошло что сегодня был
                  последний день ИНТЕНСИВА ☺️Спасибо большое всем спикерам👏 Все профессионалы своего дела🔥 Очень очень
                  крутой ИНТЕНСИВ получился👏 Просто мощная прокачка самого себя😍 Очень много нового узнала на самом
                  деле👏 Благодарю @aeka.posh и её команду❤️ Это такой труд на самом деле, выбрать таких спикеров,
                  которые могут на самом деле объяснить все четко, понятно и ещё на понятном языке😍👏🔥 А участницам
                  хочу пожелать здоровья, любви к себе и выбирать себя❤️ И конечно же женского счастья… Девочки
                  молодцы👏
                </div>
              </li>
              <li class="splide__slide review-card">
                <div class="review-card__title">
                  aizhan960
                </div>
                <div class="review-card__text">
                  Выражаю огромную благодарность вам @aeka.posh и всем спикерам❤️❤️❤️ Эти 17 дней пролетели так быстро.
                  Все темы очень актуальные🔥🔥🔥 Очень понравилось психологические упражнение, интересные задание от
                  спикеров, финансовые советы, женский чекап, и возможность задавать вопросы в прямом эфире. Я поняла
                  что нужно научиться разрешать себе,любить себя, не бояться осуждений, быть балансе, любить других
                  людей бескорыстно. Спасибо за Интенсив @womenscommunity.kz 😘😘😘
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

    <Modal @close="closeModal" :class="{'modal--active' : loadedModalState}" />
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
