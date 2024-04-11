/**
 *  @date: 11-04-2024
 * @author: Channayousif
 * @exercise:22
 * @description:
 *  22. Intentional Error: If you haven’t received an array index error in one
 *  of your programs yet, try to make one happen. Change an index in one of your programs
 *  to produce an index error. Make sure you correct the error before closing the program.
 */
import inquirer from "inquirer";
const mountains = [
    'Everest. Himalayas. Nepal, China. 29,031.7.',
    'K2 (Mount Godwin Austen) Karakoram. Pakistan, China. 28,251.',
    'Kangchenjunga. Himalayas. India, Nepal. 28,169.',
    'Lhotse. Himalayas. Nepal, China. 27,940.',
    'Makalu. Himalayas. Nepal, China. 27,838.',
    'Cho Oyu. Himalayas. Nepal, China. 26,864.',
    'Dhaulagiri. Himalayas. Nepal. 26,795.',
    'Manaslu. Himalayas. Nepal. 26,781.',
];
const languages = [
    'CHINESE, MANDARIN [CHN]',
    'SPANISH [SPN]',
    'ENGLISH [ENG]',
    'BENGALI [BNG]',
    'HINDI [HND]',
    'PORTUGUESE [POR]',
    'RUSSIAN [RUS]',
    'JAPANESE [JPN]',
    'GERMAN, STANDARD [GER]',
    'CHINESE, WU [WUU]',
];
const cities = [
    '1.	London',
    '2.	Paris',
    '3.	New York',
    '4.	Tokyo',
    '5.	Singapore',
    '6.	Dubai',
    '7.	San Francisco',
    '8.	Barcelona',
    '9.	Amsterdam',
    '10.	Seoul',
    '11.	Rome',
    '12.	Prague',
    '13.	Madrid',
    '14.	Berlin',
    '15.	Los Angeles',
    '16.	Chicago',
    '17.	Washington',
    '18.	Beijing',
    '19.	Istanbul',
    '20.	Dublin',
    '21.	Vienna',
    '22.	Milan',
    '23.	Toronto',
    '24.	Boston',
    '25.	Abu Dhabi',
];
const rivers = [
    "Indus",
    "Jhelum",
    "Chenab",
    "Ravi",
    "Sutlej",
    "Kabul"
];
let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire",
    "Azerbaijan"
];
const favourites = await inquirer.prompt([{
        name: "River",
        type: 'list',
        message: "Enter your favourite River",
        choices: rivers,
    },
    {
        name: "country",
        type: 'list',
        message: "Enter your favourite country",
        choices: countries,
    },
    {
        name: "language",
        type: 'list',
        message: "Enter your favourite language",
        choices: languages,
    },
    {
        name: "Mountains",
        type: 'list',
        message: "Enter your favourite Mountain",
        choices: mountains,
    }]);
console.log("Your Favourite language is ", favourites["languages"]); //intentional error
console.log("Your Favourite language is ", favourites["language"]); // Correction
