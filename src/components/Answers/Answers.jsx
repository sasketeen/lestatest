import AnswerCard from "../AnswerCard/AnswerCard";
import PageTitle from "../PageTitle/PageTitle";
import scrollPic from "@/images/scroll-pic.png";
import "./Answers.css";
import { useEffect, useState } from "react";

export default function Answers() {
  const [selectedContent, setSelectedContent] = useState("impression");
  const getSreenWidth = () => window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(getSreenWidth());
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getSreenWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="title-wrapper">
        <PageTitle>Ответы на вопросы</PageTitle>
      </div>
      <section>
        <ul className="answers-list">
          <li>
            <AnswerCard
              title={<>5 примеров понравившихся публикаций игровых&nbsp;студий</>}
            >
              <table className="answer-container table table_type_top-news">
                <thead className="table__heading">
                  <tr>
                    <th className="table__cell table__cell_type_heading answer-subtitle">
                      Ссылка
                    </th>
                    <th className="table__cell table__cell_type_heading answer-subtitle">
                      Задача новости
                    </th>
                    <th className="table__cell table__cell_type_heading answer-subtitle">
                      Почему понравилось
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table__row">
                    <td
                      data-label="Ссылка"
                      className="table__cell table__cell_type_content"
                    >
                      <a
                        href="https://www.satisfactorygame.com/updates/update-5"
                        className="link answer-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Satisfactory
                      </a>
                    </td>
                    <td
                      data-label="Задача новости"
                      className="table__cell table__cell_type_content"
                    >
                      Анонс обновления
                    </td>
                    <td
                      data-label="Почему понравилась"
                      className="table__cell table__cell_type_content"
                    >
                      <ul className="table__list">
                        <li className="list-item table__list-item">
                          Контент удобно сгруппирован
                        </li>
                        <li className="list-item table__list-item">
                          Все новые фичи проиллюстрированы видео или скриншотами
                        </li>
                        <li className="list-item table__list-item">
                          Удобно, что сначала описаны главные нововведения, а
                          уже в конце представлен подробный список всех
                          изменений
                        </li>
                        <li className="list-item table__list-item">
                          Все медиа материалы в хорошем качестве, на большом
                          экране не мылятся
                        </li>
                        <li className="list-item table__list-item">
                          В самом начале представлен трейлер, в котором показано
                          содержание обновления. Его просмотр позволяет не
                          читать всю статью, если хочется просто узнать что
                          нового
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="table__row">
                    <td
                      data-label="Ссылка"
                      className="table__cell table__cell_type_content"
                    >
                      <a
                        href="https://mundfish.com/ru/"
                        className="link answer-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Atomic Heart
                      </a>
                    </td>
                    <td
                      data-label="Задача новости"
                      className="table__cell table__cell_type_content"
                    >
                      Анонс игры
                    </td>
                    <td
                      data-label="Почему понравилась"
                      className="table__cell table__cell_type_content"
                    >
                      <ul className="table__list">
                        <li className="list-item table__list-item">
                          Мало текста, много медиа материалов. Это то, что надо,
                          когда хочешь показать новую игру
                        </li>
                        <li className="list-item table__list-item">
                          Текст удобно сгруппирован и не отнимает много
                          внимания, но при этом рассказаны все основные
                          особенности игры
                        </li>
                        <li className="list-item table__list-item">
                          Медиа материалы помещены в слайдеры, что удобно для
                          восприятия
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="table__row">
                    <td
                      data-label="Ссылка"
                      className="table__cell table__cell_type_content"
                    >
                      <a
                        href="https://www.cyberpunk.net/ru/news/42209/patch-1-52"
                        className="link answer-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cyberpunk 2077
                      </a>
                    </td>
                    <td
                      data-label="Задача новости"
                      className="table__cell table__cell_type_content"
                    >
                      Патч ноут
                    </td>
                    <td
                      data-label="Почему понравилась"
                      className="table__cell table__cell_type_content"
                    >
                      <ul className="table__list">
                        <li className="list-item table__list-item">
                          Изменения выполнены списком и сгруппированы по
                          категориям, что позволяет легче ориентироваться (при
                          этом в{" "}
                          <a
                            href="https://www.cyberpunk.net/ru/news/46429/patch-1-61"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link answer-card__link"
                          >
                            патче 1.61
                          </a>{" "}
                          все изменения описаны сплошным текстом, что очень
                          неудобно и некрасиво)
                        </li>
                        <li className="list-item table__list-item">
                          Нет ничего лишнего и отвлекающего
                        </li>
                        <li className="list-item table__list-item">
                          Интересная анимация в стиле игры при наведении на
                          картинку сверху
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="table__row">
                    <td
                      data-label="Ссылка"
                      className="table__cell table__cell_type_content"
                    >
                      <a
                        href="https://www.ea.com/games/battlefield/battlefield-2042/news/battlefield-2042-update-notes-3-1-0?isLocalized=true"
                        className="link answer-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Battlefield 2042
                      </a>
                    </td>
                    <td
                      data-label="Задача новости"
                      className="table__cell table__cell_type_content"
                    >
                      Патч ноут
                    </td>
                    <td
                      data-label="Почему понравилась"
                      className="table__cell table__cell_type_content"
                    >
                      <ul className="table__list">
                        <li className="list-item table__list-item">
                          Название каждого блока больше по размеру, чем основной
                          текст, благодаря чему визуально легче ориентироваться
                        </li>
                        <li className="list-item table__list-item">
                          На странице используются списки там, где нужно, а не
                          просто сплошной текст
                        </li>
                        <li className="list-item table__list-item">
                          Все новые добавления дополнительно проиллюстрированы
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="table__row">
                    <td
                      data-label="Ссылка"
                      className="table__cell table__cell_type_content"
                    >
                      <a
                        href="https://www.rockstargames.com/ru/newswire/article/9k72kk9k229481/benefit-from-bonuses-on-acid-lab-sell-and-resupply-missions"
                        className="link answer-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GTA 5 online
                      </a>
                    </td>
                    <td
                      data-label="Задача новости"
                      className="table__cell table__cell_type_content"
                    >
                      Анонс игрового события
                    </td>
                    <td
                      data-label="Почему понравилась"
                      className="table__cell table__cell_type_content"
                    >
                      <ul className="table__list">
                        <li className="list-item table__list-item">
                          Вся информация объединена в блоки. Блоки отделены друг
                          от друга скриншотами, и имеют крупный заголовок
                        </li>
                        <li className="list-item table__list-item">
                          Для медиа материалов внутри блока используется
                          слайдер. В принципе красивое визуальное
                          минималистичное оформление всей статьи
                        </li>
                        <li className="list-item table__list-item"></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </AnswerCard>
          </li>
          <li>
            <AnswerCard
              title={
                <>
                  Сравнение{" "}
                  <a
                    href="https://korabli.su/ru/news/game-updates/update-0910-american-battleships/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link answer-card__link"
                  >
                    старой
                  </a>{" "}
                  и&nbsp;
                  <a
                    href="ps://korabli.su/ru/news/game-updates/update-01111-new-year/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link answer-card__link"
                  >
                    новой
                  </a>{" "}
                  статьи
                </>
              }
            >
              <div className="answer-container answer-container_contain_text">
                {windowWidth <= 1100 && (
                  <div className="content-button-wrapper">
                    <button
                      className={`button content-button ${
                        selectedContent === "impression"
                          ? "content-button_active"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedContent("impression");
                      }}
                    >
                      Впечатления
                    </button>
                    <button
                      className={`button content-button ${
                        selectedContent === "improvements"
                          ? "content-button_active"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedContent("improvements");
                      }}
                    >
                      Что улучшить
                    </button>
                  </div>
                )}

                {(selectedContent === "impression" || windowWidth > 1100) && (
                  <div className="answer-card__content">
                    <h3 className="answer-card__subtitle">Общие впечатления</h3>
                    <p className="answer-card__paragraph">
                      Изменение в оформлении в патч-ноуте в принципе мне
                      понравились. Больше всего понравилось, что вся информация
                      теперь помещена в раскрывающиеся блоки. Это удобно, так
                      как теперь можно открыть и почитать лишь тот контент,
                      который тебя интересует. Также это удобно, когда листаешь
                      страницу на маленьком устройстве
                    </p>
                    <p className="answer-card__paragraph">
                      Также удобно, что в самом начале есть небольшая навигация
                      по самой статье
                    </p>
                    <p className="answer-card__paragraph">
                      Много скриншотов, показывающих нововведения. Контент
                      приятнее воспринимать визуально, удобно, что картинку
                      можно отдельно открыть в модальном окне, чтобы получше
                      рассмотреть. Наличие трейлера, рассказывающем о патче,
                      также играет важную положительную роль в улучшении
                      пользовательского опыта
                    </p>
                    <p className="answer-card__paragraph">
                      Понравилось, что группы изображений объединены в слайдер,
                      Это позволяет сэкономить место на странице
                    </p>
                    <p className="answer-card__paragraph">
                      Есть цветовые индикаторы важных моментов
                      (зеленый/красный). Это дополнительно привлекает и
                      акцентирует внимание
                    </p>
                  </div>
                )}

                {(selectedContent === "improvements" || windowWidth > 1100) && (
                  <div className="answer-card__content">
                    <h3 className="answer-card__subtitle">
                      Что бы я улучшил или изменил в новом патч-ноуте
                    </h3>
                    <p className="answer-card__paragraph">
                      При загрузке страницы первый блок "Празднование Нового
                      года" почему-то развернут и лишь спустя какое-то время
                      автоматически сворачивается. Это небольшой баг, но он
                      немного портит впечатление
                    </p>
                    <p className="answer-card__paragraph">
                      Я бы убрал всплывающее сообщение при наведении мыши на
                      карточки. Либо сделал бы информационную иконку "i" на
                      карточке, при нажатии/наведении на которую появлялось бы
                      это сообщение. Нынешнее поведение лично меня немного
                      раздражает
                    </p>
                    <p className="answer-card__paragraph">
                      Нужно улучшить слайдеры. В текуще реализации их нельзя
                      листать мышкой, только перетаскивая скролл бар. Это
                      неудобно. Также возможно стоит подумать над тем, чтобы
                      сделать небольший управляющие кнопки для слайдера, чтобы
                      можно было листать путем нажатия на них
                    </p>
                    <p className="answer-card__paragraph">
                      Кнопки перехода к следующей/предыдущей новости при
                      определенном положении выглядят так, как будто они как раз
                      являются управляющими кнопка слайдера. Конечно при
                      наведении на них становится понятно, что это за кнопки, но
                      на первый взгляд это может ввести в замешательство
                    </p>
                    <img
                      src={scrollPic}
                      alt="Картинка, на которой кнопки перехода выглядят как кнопки управления слайдером"
                      className="answer-card__img"
                    />
                    <p className="answer-card__paragraph">
                      Возможно стоит переработать цветовую палитру. Слишком
                      много цветов, которые больше отвлекают, а где-то они
                      используются без надобности
                    </p>
                    <p className="answer-card__paragraph">
                      Можно улучшить навигацию на странице. Сейчас ей невозможно
                      управлять с помощью клавиатуры, так как у кнопок/ссылок
                      нет состояния фокуса
                    </p>
                  </div>
                )}
              </div>
            </AnswerCard>
          </li>
          <li>
            <AnswerCard
              title={
                <>
                  Анализ страницы{" "}
                  <a
                    href="https://korabli.su/ru/content/game/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link answer-card__link"
                  >
                    «Об&nbsp;игре»
                  </a>
                </>
              }
            >
              <div className="answer-container answer-container_contain_text">
                <div className="answer-card__content">
                  <h3 className="answer-card__subtitle">
                    Ошибки в дизаине и верстке
                  </h3>
                  <p className="answer-card__paragraph">
                    Есть проблемы со слайдером, отсутствие фокуса и навигацией
                    по tab, описанные в предыдущем вопросе
                  </p>
                  <p className="answer-card__paragraph">
                    В блоке «Нации» на десктопе при выборе нации CCСР обрезается
                    ее флаг
                  </p>
                  <p className="answer-card__paragraph">
                    В том же блоке «Нации» присутствует несколько заголовков H2.
                    Наверное более правильно будет «Нации» оставить заголовком 2
                    уровня, а уже названия конкретных наций в описании сделать
                    заголовком 3 уровня
                  </p>
                  <p className="answer-card__paragraph">
                    Если говорить про семантику, то чтобы разбить страницу на
                    разные блоки, можно воспользоваться тегом section, а не div,
                    а для характеристик наций больше подойдет тег span
                  </p>
                  <p className="answer-card__paragraph">
                    Было бы неплохо реализовать закрытие модальных окон (после
                    скачивания игры или при открытии видео) по клику на темную
                    область, а не только по крестику. Аналогично и для
                    бургер-меню на мобилках
                  </p>
                </div>
              </div>
            </AnswerCard>
          </li>
        </ul>
      </section>
    </>
  );
}
