function App() {
    const u220 = ["Захаров Тимур Арсентьевич", "Миронов Никита Леонидович", "Вишневский Адам Даниилович", "Смирнов Максим Дмитриевич",
        "Морозова Дарья Ярославовна", "Федорова Виктория Николаевна", "Белова Кира Дмитриевна", "Кузнецов Юрий Артемьевич", "Зотова Ксения Глебовна",
        "Осипов Павел Иванович", "Белова Ева Сергеевна", "Козлова Ева Вадимовна", "Ушаков Егор Артёмович", "Кузнецова Валерия Максимовна",
        "Чернов Павел Романович", "Попова Елизавета Максимовна", "Третьяков Даниил Фёдорович", "Матвеев Михаил Игоревич", 'Сомова Арина Александровна',
        "Семенова Анастасия Евгеньевна"];
    const u221 = ["Горбунова Анна Марковна", "Макаров Артём Маркович", "Антонова Диана Владимировна", "Коротков Максим Максимович",
        "Поздняков Серафим Савельевич", "Алексеев Никита Тимофеевич", "Максимова Маргарита Матвеевна", "Шульгин Артём Артёмович", "Юдина Мелания Макаровна",
        "Лебедев Эмиль Максимович", "Петров Владислав Александрович", "Абрамов Леонид Михайлович", "Марков Павел Андреевич",
        "Федорова Полина Максимовна", "Денисова Марьям Артёмовна", "Кузнецова Александра Александровна", "Демин Давид Романович",
        "Павлов Василий Даниилович", "Кошелев Алексей Александрович", "Ширяев Егор Романович"];
    const u222 = ["Лукьянов Руслан Артёмович", "Мельникова Сафия Артёмовна", "Харитонова Милана Матвеевна", "Королева Елизавета Тимофеевна",
        "Панкратова Татьяна Арсентьевна", "Фролова Ксения Ивановна", "Дмитриева Виктория Марковна", "Лазарев Тимофей Адамович",
        "Толкачева Амелия Васильевна", "Головин Лев Александрович", "Львова Ангелина Васильевна", "Синицын Марк Лукич", "Хохлова Ариана Егоровна",
        "Козлова Анастасия Артёмовна", "Иванова Александра Андреевна", "Медведева Вера Павловна", "Нестерова Есения Александровна",
        "Жукова Вероника Данииловна", "Ильин Максим Владиславович", "Афанасьев Михаил Ильич"];
    const u223 = ["Попов Даниил Алексеевич", "Лаврова Валерия Александровна", "Демин Артём Елисеевич", "Устинов Максим Данилович",
        "Козлова Ксения Юрьевна", "Титов Сергей Эмирович", "Софронова Диана Михайловна", "Калашников Антон Максимович", "Зимина Ника Тимофеевна",
        "Севастьянова Амалия Евгеньевна", "Селиванова Алёна Давидовна", "Бородин Егор Петрович", "Грибова Ольга Никитична", "Лукьянова Анна Адамовна",
        "Степанов Марк Фёдорович", "Боброва Кристина Николаевна", "Панков Савелий Львович", "Панкратов Михаил Григорьевич", "Яковлев Артемий Антонович",
        "Иванова Мария Никитична"];
    const u224 = ["Павлов Иван Германович", "Калмыкова Таисия Максимовна", " Маркова Арина Максимовна", "Филиппов Степан Маркович",
        "Софронова Николь Ивановна", "Лосев Иван Захарович", "Лаврова Агния Билаловна", "Шмелева Варвара Львовна", "Аникин Сергей Александрович",
        "Зайцева Яна Львовна", "Федотов Роман Максимович", "Иванов Иван Валерьевич", "Тарасов Леонид Максимович", "Царев Савва Михайлович",
        "Маслов Тимофей Тимофеевич", "Волкова Вероника Александровна", "Гришин Платон Алиевич", "Панова Софья Филипповна", "Козин Владислав Маркович",
        "Васильева София Романовна"];
    const u225 = ["Майорова Ирина Леонидовна", "Семенов Николай Всеволодович", "Константинова Дарья Егоровна", "Кузнецов Эмир Миронович",
        "Шапошникова Таисия Тимофеевна", "Платонова Ксения Константиновна", "Федоров Вячеслав Алексеевич", "Борисов Роман Фёдорович",
        "Трифонов Матвей Романович", "Корнилов Иван Станиславович", "Жуков Никита Викторович", "Богданов Дмитрий Ильич", "Соловьева Ясмина Дамировна",
        "Комиссарова Мария Юрьевна", "Моргунов Александр Денисович", "Соловьев Иван Ярославович", "Новикова Анна Максимовна", "Журавлева Алиса Артуровна",
        "Дорофеева Ева Константиновна", "Логинов Александр Фёдорович"];
    const u226 = ["Кузьмин Макар Андреевич", "Парфенова Софья Робертовна", "Новикова Валерия Максимовна", "Соловьева Василиса Вадимовна",
        "Глухов Константин Львович", "Лебедев Дмитрий Семёнович", "Муравьев Александр Андреевич", "Панфилов Дмитрий Михайлович",
        "Сорокина Анна Николаевна", "Корнев Матвей Артемьевич", "Черкасов Пётр Тимурович", "Беляева Виктория Алексеевна", "Павлов Сергей Глебович",
        "Афанасьев Арсений Вячеславович", "Покровский Никита Максимович", "Филиппова Злата Андреевна", "Быков Кирилл Серафимович",
        "Наумов Дмитрий Даниэльевич", "Федосеев Эмин Владиславович", "Лебедева Елизавета Дмитриевна"];
    const groups = [{ title: "У-220", content: u220 }, { title: "У-221", content: u221 }, { title: "У-222", content: u222 }, { title: "У-223", content: u223 },
    { title: "У-224", content: u224 }, { title: "У-225", content: u225 }, { title: "У-226", content: u226 }];

    return (
        <>
            <h1>Список учащихся</h1>
            <ul>
                {groups.map((group) => (
                    <li>
                        {group.title}
                        <ListStudent group={group.content} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App

function ListStudent(props) {
    const students = props.group;
    const listStudent = students.map((student) =>
        <li>{student}</li>
    );
    return (
        <ul>{listStudent}</ul>
    );
}
