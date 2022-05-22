import AnimatedPage from "../AnimatedPage";
import Price from "../components/Price";
import "./Value.scss";

function Value() {
  return (
    <AnimatedPage>
      <section className="value" id="value">
        <h2 className="value__title">Услуги</h2>
        <Price
          title="Встреча-знакомство"
          format="online/offline"
          subtitle="Перед началом работы необходимо познакомиться. В ходе личного диалога мне легче выявить ваши потребности, сделать точные замеры
         для того, чтобы наша работа была максимально продуктивной и принесла исключительно положительные эмоции."
          value="Бесплатно"
          img="/img/meet.jpeg"
        ></Price>

        <Price
          title="Разбор гардероба"
          format="online"
          subtitle="Мы созваниваемся с вами по видеосвязи, беседуем. Я определяю вещи на их профпригодность. Затем вы выполняете мои задания,
         присылаете фото оставшейся одежды, обуви и аксессуаров. Составляю готовые комплекты, наилучшим образом отражающие ваш персональный
          стиль, даю советы по дальнейшему выбору одежды с учетом типа фигуры, рекомендованным покупкам. В течение двух дней я присылаю вам
          готовый шопинг лист с недостающим списком одежды, обуви и аксессуаров и фото-коллажи с готовыми образами, наилучшим образом отражающим
          ваш уникальный стиль. Вы можете самостоятельно купить всю недостающую одежду, так как я даю вам актуальные рекомендации с учетом 
          нынешних коллекций и ваших индивидуальных параметров, а можете заказать услугу «Шопинг сопровождение»."
          value="10 000р"
          img="/img/analysis.jpeg"
        ></Price>

        <Price
          title="Разбор гардероба"
          format="offline с выездом"
          subtitle="Необходимое время для процедуры от 30 минут до 4 часов. Время разбора гардероба зависит от размера вашего гардероба.

Я приезжаю к вам домой, убираю неподходящие/неактуальные вещи. Составляю готовые комплекты, наилучшим образом отражающие ваш 
персональный стиль. Делаю фотографии, даю рекомендации по эргономичному хранению и использованию вашего гардероба. Составляю комплекты
 из вашей одежды, даю советы по дальнейшему выбору одежды с учетом типа фигуры, рекомендованным покупкам. В течение двух дней я присылаю
  вам готовый шопинг лист с недостающим списком одежды, обуви и аксессуаров и фото-коллажи с готовыми образами, наилучшим образом отражающим
   ваш уникальный стиль. Вы можете самостоятельно купить всю недостающую одежду, так как я даю вам актуальные рекомендации с учетом нынешних
    коллекций и ваших индивидуальных параметров, а можете заказать услугу «Шопинг сопровождение»."
          value="5 000р/час(+стоимость выезда)"
          img="/img/kris.jpeg"
        ></Price>

        <Price
          title="Шопинг-сопровождение"
          subtitle="Предварительно я отправляю вам анкету для того, чтобы ознакомиться с вашими индивидуальными параметрами, 
        кругом времени, желаниями, целями и задачами предстоящего шопинг сопровождения.
После заполнения анкеты я выстраиваю шопинг маршрут с учётом ваших потребностей, параметров, заданной цели и бюджета.
На шопинге примеряем вещи, обувь и аксессуары. Даю рекомендации для вашего типа фигуры, роста, размера."
          value="20000р"
          img="/img/shopping.jpeg"
        ></Price>

        <Price
          title="Стилизация фотосъёмки"
          subtitle="Предварительно обсуждаем идею, концепцию, примерные образы. Составляю мудборд. При необходимости советую визажистов, 
        фотографов и видеографов, которые наилучшим образом будут соответствовать заданной съемке.
На съёмку я привожу полный образ: одежда, аксессуары и обувь.
Я присутствую на съёмочном процессе. Помогаю одеваться. При необходимости помогаю в позировании."
          value="От 8 000р/час в зависимости от задачи (творческая, индивидуальная съёмка)
Коммерческая стилизация съёмки (маркетплейсы, шоурумы, магазины и т.д) 
3000р/образ"
          img="/img/photography.jpeg"
        ></Price>

        <Price
          title="Индивидуальная консультация"
          format="online"
          subtitle="Работаю с вашим списком необходимых покупок. Бюджет обсуждаем предварительно. Даю актуальные ссылки на вещи в интернет магазинах.
В рамках индивидуальной консультации возможно подобрать полноценный образ, включающий верхнюю одежду, аксессуары и обувь.
Или же можно использовать индивидуальную консультацию в качестве поиска вещи. Вы мне присылаете фото желаемой вещи/образа и я присылаю вам несколько ссылок на интернет магазины."
          value="5000р"
          img="/img/consultation.jpeg"
        ></Price>

        <Price
          title="Тренировочный шопинг"
          format="offline"
          subtitle="Если вы хотите немного обучиться стилистике и весело провести время с подругой в торговом центре под присмотром 
        стилиста, тренировочный шопинг для вас!
Приобретать вещи необязательно.
В результате вы получите взгляд специалиста на ваш стиль и возможность добавить изюминки, новое видение вашего стиля и достоинств фигуры,
подходящие силуэты, ткани и цвета, легкий и удобный формат общения в кругу близкой подруги и стилиста."
          value="15000р(2 часа)"
          img="/img/image3.jpeg"
        ></Price>

        <Price
          title="Индивидуальный имиджбук"
          format="online"
          subtitle="Это большая работа в формате презентации, в которой будут отражены ваши индивидуальные характеристики: фигура, стили, 
        иконы стиля, цветовая палитра (БЕЗ цветотипа), структура гардероба, дополнительные аспекты имиджа и стиля: прическа, макияж и другое. 
        Имиджбук - большая электронная книга со всеми иллюстрациями, коллажами, сетами, вещами, которая сделана специально для вас.
        Отличный подарок для себя или своих близких людей.
Настольное руководство по стилю, открыв которое, вы всегда сможете ответить на свой вопрос:
-что купить?
-что надеть?
-что я хочу?
-что мне подходит?
-что мне делать со стрижкой?
и многое другое"
          value="25000р"
          img="/img/имидж.jpeg"
        ></Price>

        <Price
          title="Стиль для мужчин"
          format="online/offline"
          subtitle="Минимум временных затрат – максимум работы.
Мужчине в шопинге важна логика и скорость, а не эмоции от покупок.
Четкие задачи и цели, прозрачный результат, быстрый и позитивный процесс похода по магазинам."
          value="30000р(3 часа)"
          img="/img/men.jpeg"
        ></Price>

        <Price
          title="Индивидуальная капсула"
          format="online"
          subtitle="Составление индивидуальной сезонной капсулы со ссылками (13-15 вещей, 3-5 ссылок на выбор на каждую вещь)."
          value="15000р"
          img="/img/капсула.jpeg"
        ></Price>

        <Price
          title="Пакет базовый"
          subtitle="Знакомство, разбор гардероба, шопинг сопровождение, составление шопинг-листа, дистанционное сопровождение в течение месяца."
          value="30000р"
          img="/img/база.jpeg"
        ></Price>

        <Price
          title="Пакет годовой безлимит"
          subtitle="Знакомство, разбор гардероба, шопинг сопровождение, составление шопинг-листа, безлимитное дистанционное сопровождение, 
        обучение личному стилю, составление имиджбука (брендбука), поиск нужной вещи, ответы из примерочной."
          value="150000р"
          img="/img/vip.jpeg"
        ></Price>
      </section>
    </AnimatedPage>
  );
}

export default Value;
