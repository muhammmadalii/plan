const elForm = document.querySelector("#form");
const askDay = document.querySelector("#askday");
const elResult = document.querySelector("#result");
const text = document.querySelector("#text")

elForm.addEventListener("submit", (e) => {
   e.preventDefault();
 
    elResult.className = "on";
    
(askDay.value)
    switch (askDay.value){
        case "dushanba":
            text.textContent = "1 Biologiya 🦠 2 Ona tili 📖    3 Informatika 🖥 4 Fizika 💡 5 Ingliz tili 🇺🇸";
            break;
        case "seshanba":
            text.textContent = "1 Algebra 🧮 2 Adabiyot 📚 3 Jismoniy tarbiya 🏃‍♂️ 4 Tadbirkorlik 💸 5 Huquq 🧰";
            break;
        case "chorshanba":
            text.textContent = "1 Rus tili 🇷🇺, 2 Ona tili 📖, 3 Umumjahon tarixi 🗿, 4 Geometriya 📐";
            break;
        case "payshanba":
            text.textContent = "1 Ingliz tili 🇺🇸, 2 Fizika 💡, 3 Tarbiya 👨‍🏫, 4 Kimyo 🧪, 5 Algebra 🧮";
            break;
        case "juma":
            text.textContent = "1 Sinf soati 🕰, 2 Jismoniy madaniyat 🧍‍♂️, 3 Adabiyot 📚, 4 Biologiya 🦠, 5 O'zbekiston tarixi 🗿, 6 Geometriya 📐";
            break;
        case "shanba":
            text.textContent = "1 CHQBT 💂‍♂️, 2 Rus tili 🇷🇺, 3 Kimyo 🧪, 4 Ingliz tili 🇺🇸, 5 Algebra 🧮";
            break;
        default:
            text.textContent = "Maktab ham dam oladi 😀";
    }
    askDay.value = null;
})
