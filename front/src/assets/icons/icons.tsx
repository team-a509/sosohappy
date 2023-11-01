const bellDisactiveColor: string = 'black';
const bellActiveColor: any = {
  bellColor: 'black',
  dotColor: '#FF0032',
};
const addPlusColor: any = {
  backgroundColor: '#F7F6FC',
  plusColor: '#959AA0',
};
const bookColor: string = 'black';
const hamburgerMenuColor: string = 'black';
const dotMenuColor: string = 'black';
const exitColor: string = 'black';
const backIconColor: string = '#000000';
const gearColor: string = 'black';
const peopleColor: string = 'black';
const microphoneColor: string = 'black';
const sendColor: string = 'black';


export const bellDisactive: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M91.3679 84.3458L84.2137 72.4208C80.9095 66.9167 79.1637 60.6125 79.1637 54.1958V43.75C79.1637 30.5625 70.3637 19.4083 58.3304 15.8125V8.33333C58.3304 3.7375 54.5929 0 49.9971 0C45.4012 0 41.6637 3.7375 41.6637 8.33333V15.8125C29.6304 19.4083 20.8304 30.5625 20.8304 43.75V54.1958C20.8304 60.6125 19.0846 66.9125 15.7846 72.4167L8.63039 84.3417C8.24289 84.9875 8.23455 85.7875 8.60539 86.4417C8.97622 87.0958 9.66372 87.5 10.4137 87.5H89.5804C90.3304 87.5 91.022 87.0958 91.3929 86.4458C91.7637 85.7958 91.7512 84.9875 91.3679 84.3458Z" fill="${bellDisactiveColor}"/>
  <path d="M50.0024 100C55.7983 100 60.7733 96.575 63.1233 91.6666H36.8816C39.2316 96.575 44.2066 100 50.0024 100Z" fill="${bellDisactiveColor}"/>
</svg>
`;

export const bellActive: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M91.3679 84.3458L84.2137 72.4208C80.9095 66.9167 79.1637 60.6125 79.1637 54.1958V43.75C79.1637 30.5625 70.3637 19.4083 58.3304 15.8125V8.33333C58.3304 3.7375 54.5929 0 49.9971 0C45.4012 0 41.6637 3.7375 41.6637 8.33333V15.8125C29.6304 19.4083 20.8304 30.5625 20.8304 43.75V54.1958C20.8304 60.6125 19.0846 66.9125 15.7846 72.4167L8.63039 84.3417C8.24289 84.9875 8.23455 85.7875 8.60539 86.4417C8.97622 87.0958 9.66372 87.5 10.4137 87.5H89.5804C90.3304 87.5 91.022 87.0958 91.3929 86.4458C91.7637 85.7958 91.7512 84.9875 91.3679 84.3458Z" fill="${bellActiveColor.bellColor}"/>
  <path d="M50.0024 100C55.7983 100 60.7733 96.575 63.1233 91.6666H36.8816C39.2316 96.575 44.2066 100 50.0024 100Z" fill="${bellActiveColor.bellColor}"/>
  <circle cx="87" cy="13" r="10" fill="${bellActiveColor.dotColor}"/>
</svg>
`;

export const addPlus: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="${addPlusColor.backgroundColor}"/>
  <path d="M50.0001 75.2525L50.0001 24.7474M24.7476 50H75.2526" stroke="${addPlusColor.plusColor}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const book: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.8842 20.8333H85.3842C85.4134 20.8292 85.4384 20.8333 85.4675 20.8333C86.6175 20.8333 87.5509 19.9 87.5509 18.75C87.5509 18.1167 87.2717 17.55 86.8259 17.1708C86.4967 16.6125 85.7925 15.0917 85.5175 12.5H22.8842C21.7342 12.5 20.8009 11.5667 20.8009 10.4167C20.8009 9.26667 21.7342 8.33333 22.8842 8.33333H85.5009C85.855 4.94167 86.9717 3.4375 86.9717 3.4375C87.5009 2.82083 87.6175 1.95 87.28 1.2125C86.9425 0.475 86.1967 0 85.3842 0H22.8842C17.1425 0 12.4675 4.675 12.4675 10.4167C12.4675 16.1583 17.1425 20.8333 22.8842 20.8333ZM85.3842 25H22.8842C20.3675 25 17.9175 24.3125 15.6009 22.9625C14.9592 22.5917 14.1634 22.5833 13.5134 22.9583C12.8675 23.3292 12.4675 24.0125 12.4675 24.7625V89.5833C12.4675 95.325 17.1425 100 22.8842 100H85.3842C86.5342 100 87.4675 99.0667 87.4675 97.9167V27.0833C87.4675 25.9333 86.5342 25 85.3842 25Z" fill="${bookColor}"/>
</svg>
`;

export const hamburgerMenu: string = `
<svg width="102" height="100" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.08333 22.9167H98.9167C100.067 22.9167 101 21.9833 101 20.8333C101 19.6833 100.067 18.75 98.9167 18.75H3.08333C1.93333 18.75 1 19.6833 1 20.8333C1 21.9833 1.93333 22.9167 3.08333 22.9167Z" fill="${hamburgerMenuColor}" stroke="${hamburgerMenuColor}" stroke-width="2"/>
  <path d="M98.9167 47.9166H3.08333C1.93333 47.9166 1 48.85 1 50C1 51.15 1.93333 52.0833 3.08333 52.0833H98.9167C100.067 52.0833 101 51.15 101 50C101 48.85 100.067 47.9166 98.9167 47.9166Z" fill="${hamburgerMenuColor}" stroke="${hamburgerMenuColor}" stroke-width="2"/>
  <path d="M98.9167 77.0834H3.08333C1.93333 77.0834 1 78.0167 1 79.1667C1 80.3167 1.93333 81.25 3.08333 81.25H98.9167C100.067 81.25 101 80.3167 101 79.1667C101 78.0167 100.067 77.0834 98.9167 77.0834Z" fill="${hamburgerMenuColor}" stroke="${hamburgerMenuColor}" stroke-width="2"/>
</svg>
`;

export const dotMenu: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="50" r="10" fill="${dotMenuColor}"/>
  <circle cx="50" cy="50" r="10" fill="${dotMenuColor}"/>
  <circle cx="80" cy="50" r="10" fill="${dotMenuColor}"/>
</svg>
`;

export const exit: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M98.6778 48.8212L98.6767 48.8184C98.5408 48.4935 98.351 48.2127 98.1368 47.9743C98.1038 47.9277 98.0583 47.871 97.9991 47.8142L81.3445 31.1596C80.1415 29.9566 78.1875 29.9566 76.9845 31.1596C75.7814 32.3626 75.7814 34.3166 76.9845 35.5196L88.3857 46.9209H41.6666C39.9643 46.9209 38.5833 48.3019 38.5833 50.0042C38.5833 51.7065 39.9643 53.0875 41.6666 53.0875H88.3899L76.9845 64.4929C75.7814 65.696 75.7814 67.65 76.9844 68.853L76.9918 68.8602C77.592 69.4482 78.3787 69.75 79.1666 69.75C79.9551 69.75 80.7437 69.4477 81.3451 68.8524L81.3487 68.8488L98.0154 52.1821C98.1555 52.042 98.2411 51.8985 98.2838 51.8247C98.2879 51.8175 98.292 51.8103 98.2959 51.8036C98.3021 51.7926 98.3077 51.7827 98.3121 51.775L98.329 51.7451C98.3309 51.7418 98.3323 51.7394 98.3333 51.7378L98.3356 51.7344C98.3544 51.7072 98.3602 51.6999 98.3705 51.6871C98.3822 51.6724 98.3998 51.6504 98.4495 51.5825C98.5102 51.4995 98.6015 51.3672 98.6747 51.1948L98.6778 51.1872C98.992 50.4295 98.992 49.5789 98.6778 48.8212ZM66.6666 63.5834C64.9643 63.5834 63.5832 64.9644 63.5832 66.6667V87.5C63.5832 90.3936 61.2268 92.75 58.3332 92.75H12.4999C9.60637 92.75 7.24992 90.3936 7.24992 87.5V12.5C7.24992 9.60649 9.60637 7.25004 12.4999 7.25004H58.3332C61.2268 7.25004 63.5832 9.60649 63.5832 12.5V33.3334C63.5832 35.0357 64.9643 36.4167 66.6666 36.4167C68.3689 36.4167 69.7499 35.0357 69.7499 33.3334V12.5C69.7499 6.20609 64.6272 1.08337 58.3332 1.08337H12.4999C6.20597 1.08337 1.08325 6.20609 1.08325 12.5V87.5C1.08325 93.794 6.20597 98.9167 12.4999 98.9167H58.3332C64.6272 98.9167 69.7499 93.794 69.7499 87.5V66.6667C69.7499 64.9644 68.3689 63.5834 66.6666 63.5834Z" fill="${exitColor}" stroke="${exitColor}" stroke-width="2"/>
</svg>
`;

export const backIcon: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M62.5 25L38.2071 49.2929C37.8166 49.6834 37.8166 50.3166 38.2071 50.7071L62.5 75" stroke="${backIconColor}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const gear: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M67.8626 65.0208C67.9459 64.1917 67.9917 63.3458 67.9917 62.5C67.9917 61.6417 67.9417 60.7875 67.8584 59.9292L74.4876 54.7292C75.9542 53.4917 76.3084 51.4125 75.3501 49.8167L68.2501 37.5458C67.2959 35.9625 65.4209 35.2125 63.5084 35.925L55.7876 39.0292C54.4001 38.0417 52.9542 37.1958 51.4126 36.4708L50.2417 28.1583C49.9084 26.3625 48.2667 25 46.4292 25H32.2626C30.4126 25 28.7709 26.3917 28.4292 28.3083L27.2751 36.5375C25.7167 37.2708 24.2542 38.125 22.9001 39.0833L15.1334 35.9583C13.4042 35.3167 11.4001 36 10.4251 37.625L3.35839 49.8417C2.38339 51.4667 2.74173 53.5417 4.26256 54.8292L10.8292 59.975C10.7501 60.8083 10.7001 61.6542 10.7001 62.5C10.7001 63.3583 10.7501 64.2125 10.8334 65.0708L4.20423 70.2708C2.73756 71.5083 2.38339 73.5875 3.34173 75.1833L10.4417 87.4542C11.3959 89.0417 13.2751 89.8 15.1834 89.075L22.9042 85.9708C24.2917 86.9583 25.7376 87.8042 27.2792 88.5292L28.4501 96.8417C28.7876 98.6375 30.4251 100 32.2626 100H46.4292C48.2792 100 49.9209 98.6083 50.2626 96.6917L51.4167 88.4667C52.9751 87.7292 54.4376 86.875 55.7876 85.9167L63.5542 89.0417C63.9917 89.2083 64.4542 89.2917 64.9251 89.2917C66.2959 89.2917 67.5376 88.5875 68.2667 87.3792L75.3334 75.1625C76.3084 73.5375 75.9501 71.4625 74.4292 70.175L67.8626 65.0208ZM39.3459 70.8333C34.7501 70.8333 31.0126 67.0958 31.0126 62.5C31.0126 57.9042 34.7501 54.1667 39.3459 54.1667C43.9417 54.1667 47.6792 57.9042 47.6792 62.5C47.6792 67.0958 43.9417 70.8333 39.3459 70.8333Z" fill="${gearColor}"/>
  <path d="M96.0501 24.1375L92.9543 21.7375C92.9793 21.4417 92.9918 21.1417 92.9918 20.8333C92.9918 20.5208 92.9834 20.2167 92.9668 19.9125L96.1209 17.4375C97.1959 16.4792 97.4709 14.9333 96.7626 13.6417L93.0376 7.2C92.5168 6.24167 91.5001 5.64583 90.3918 5.64583C90.1251 5.64583 89.5168 5.75417 89.2668 5.85417L85.6751 7.3C85.1543 6.95417 84.6334 6.65 84.1043 6.3875L83.5709 2.70417C83.4501 1.1875 82.1418 0 80.5959 0H73.0959C71.6293 0 70.3459 1.0875 70.0959 2.575L69.5459 6.4125C68.9959 6.69167 68.4793 6.9875 67.9876 7.30417L64.3209 5.82917C64.0918 5.74583 63.5251 5.64583 63.2793 5.64583C62.2293 5.64583 61.2584 6.17917 60.6376 7.15417L56.8668 13.6833C56.1459 15 56.4501 16.5708 57.6334 17.5208L60.7209 19.9375C60.7084 20.2333 60.7001 20.5292 60.7001 20.8333C60.7001 21.1375 60.7084 21.4333 60.7209 21.725L57.5376 24.2208C56.4584 25.1792 56.1793 26.725 56.8918 28.025L60.6168 34.4667C61.1376 35.425 62.1543 36.0208 63.2626 36.0208C63.5293 36.0208 64.1376 35.9125 64.3876 35.8125L67.9793 34.3667C68.5001 34.7125 69.0209 35.0167 69.5501 35.2792L70.1043 39.1375C70.3501 40.6042 71.6084 41.6667 73.0959 41.6667H80.5959C82.0626 41.6667 83.3459 40.5792 83.5959 39.0917L84.1459 35.25C84.6918 34.975 85.2043 34.675 85.6834 34.3667L89.3668 35.8417C89.5959 35.925 90.1626 36.025 90.4084 36.025C91.4584 36.025 92.4293 35.4917 93.0501 34.5167L96.8251 27.9792C97.5084 26.7208 97.2293 25.1792 96.0501 24.1375ZM76.8459 25C74.5501 25 72.6793 23.1292 72.6793 20.8333C72.6793 18.5375 74.5501 16.6667 76.8459 16.6667C79.1418 16.6667 81.0126 18.5375 81.0126 20.8333C81.0126 23.1292 79.1459 25 76.8459 25Z" fill="${gearColor}"/>
</svg>
`;

export const people: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M49.9166 39.1667C57.9707 39.1667 64.4999 32.6375 64.4999 24.5833C64.4999 16.5292 57.9707 10 49.9166 10C41.8624 10 35.3333 16.5292 35.3333 24.5833C35.3333 32.6375 41.8624 39.1667 49.9166 39.1667Z" fill="${peopleColor}"/>
  <path d="M79.0834 47.5C84.8364 47.5 89.5001 42.8363 89.5001 37.0833C89.5001 31.3303 84.8364 26.6666 79.0834 26.6666C73.3304 26.6666 68.6667 31.3303 68.6667 37.0833C68.6667 42.8363 73.3304 47.5 79.0834 47.5Z" fill="${peopleColor}"/>
  <path d="M21.0429 47.5C26.7959 47.5 31.4596 42.8363 31.4596 37.0833C31.4596 31.3303 26.7959 26.6666 21.0429 26.6666C15.2899 26.6666 10.6262 31.3303 10.6262 37.0833C10.6262 42.8363 15.2899 47.5 21.0429 47.5Z" fill="${peopleColor}"/>
  <path d="M49.9166 43.3334C34.9833 43.3334 22.8333 55.4834 22.8333 70.4167C22.8333 71.5667 24.5681 90.6666 25.7181 90.6666H74C75.15 90.6666 76.9999 71.5667 76.9999 70.4167C76.9999 55.4834 64.8499 43.3334 49.9166 43.3334Z" fill="${peopleColor}"/>
  <path d="M24.6375 52.1166C23.3625 51.8458 22.0667 51.6666 20.75 51.6666C10.4125 51.6666 2 60.0791 2 70.4166C2 71.5666 2.85 84.1666 4 84.1666H19C18.7667 83.5125 18.6667 71.15 18.6667 70.4166C18.6667 63.5791 20.9 57.2666 24.6375 52.1166Z" fill="${peopleColor}"/>
  <path d="M79.0972 51.6666C77.7806 51.6666 76.4847 51.8458 75.2097 52.1166C78.9472 57.2666 81.1806 63.5791 81.1806 70.4166C81.1806 71.15 81.2333 83.5125 81 84.1666H84.5H88H92.5H96C97.15 84.1666 97.8472 71.5666 97.8472 70.4166C97.8472 60.0791 89.4347 51.6666 79.0972 51.6666Z" fill="${peopleColor}"/>
</svg>
`;

export const microphone: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M43.7501 70.8333H52.0834C60.1251 70.8333 66.6667 64.2916 66.6667 56.25V14.5875C66.6667 6.54582 60.1251 0.00415039 52.0834 0.00415039H43.7501C35.7084 0.00415039 29.1667 6.54582 29.1667 14.5875V56.25C29.1667 64.2916 35.7084 70.8333 43.7501 70.8333Z" fill="${microphoneColor}"/>
  <path d="M72.9167 37.5C71.7667 37.5 70.8334 38.4333 70.8334 39.5833V60.4167C70.8334 68.4583 64.2917 75 56.25 75H39.5834C31.5417 75 25 68.4583 25 60.4167V39.5833C25 38.4333 24.0667 37.5 22.9167 37.5C21.7667 37.5 20.8334 38.4333 20.8334 39.5833V60.4167C20.8334 70.7542 29.2459 79.1667 39.5834 79.1667H45.8334V95.8333H31.25C30.1 95.8333 29.1667 96.7667 29.1667 97.9167C29.1667 99.0667 30.1 100 31.25 100H64.5834C65.7334 100 66.6667 99.0667 66.6667 97.9167C66.6667 96.7667 65.7334 95.8333 64.5834 95.8333H50V79.1667H56.25C66.5875 79.1667 75 70.7542 75 60.4167V39.5833C75 38.4333 74.0667 37.5 72.9167 37.5Z" fill="${microphoneColor}"/>
</svg>
`;

export const send: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M94.613 5.38701C95.8178 6.59176 96.1677 8.40861 95.4965 9.97462L59.7823 93.308C59.1008 94.898 57.5077 95.9016 55.7793 95.8297C54.0509 95.7578 52.5467 94.6254 51.9996 92.9842L40.7537 59.2464L7.01582 48.0004C5.37468 47.4534 4.24226 45.9492 4.17037 44.2207C4.09848 42.4923 5.10206 40.8993 6.69211 40.2178L90.0254 4.50352C91.5915 3.83237 93.4083 4.18227 94.613 5.38701ZM20.0478 43.5603L45.3653 51.9995C46.6095 52.4142 47.5858 53.3905 48.0006 54.6347L56.4397 79.9522L83.7337 16.2664L20.0478 43.5603Z" fill="${sendColor}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M92.5296 13.3629L46.6963 59.1963L40.8037 53.3037L86.637 7.47038L92.5296 13.3629Z" fill="${sendColor}"/>
</svg>
`;

export const send2: string = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.7175 45.4614L43.9359 53.5342C44.8669 53.8445 45.3325 53.9997 45.6663 54.3335C46.0002 54.6674 46.1554 55.1329 46.4657 56.064L54.5385 80.2824L54.5385 80.2825C56.1073 84.9889 56.8917 87.3421 58.3333 87.3421C59.7748 87.3421 60.5592 84.9889 62.128 80.2824L82.0683 20.4614C82.6203 18.8056 82.8962 17.9777 82.4592 17.5407C82.0222 17.1036 81.1943 17.3796 79.5385 17.9315L19.7175 37.8719C15.011 39.4407 12.6578 40.2251 12.6578 41.6666C12.6578 43.1081 15.011 43.8925 19.7175 45.4614Z" fill="${sendColor}" stroke="${sendColor}" stroke-width="5"/>
</svg>
`;

export const sosohappyLogo: string = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="1920px" height="1080px" viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080" xml:space="preserve">
   <path fill="#72D0F5" d="M780.865,517.957c0,0,11.843,124.564-133.035,250.494c0,0-108.417,89.976-265.848,123.939
     c4.348-1.836,248.137-105.908,311.892-210.586c0,0,99.524-117.803,46.714-251.853c-52.096-125.684-200.732-71.231-202.924-70.437
     c1.665-1.078,81.061-52.241,160.942-0.489C698.608,359.026,777.82,408.281,780.865,517.957z"/>
   <path fill="#0283B0" d="M689.468,451.441c0,0-27.928-113.742-151.823-91.906c221.387-46.714,189.398,180.096,189.398,180.096
     c-37.921,182.797-285.365,256.08-285.365,256.08l-12.694-35.553c0,0,152.836-28.941,223.416-141.662
     C652.4,618.496,709.779,545.886,689.468,451.441z"/>
   <path fill="#0283B0" d="M453.862,363.942c0,0,57.581,13.363,101.067,116.36c-8.651-17.551-74.906-137.566-253.681-99.523
     C301.249,380.779,359.418,332.786,453.862,363.942z"/>
   <path fill="#00B4DB" d="M740.589,429.952c52.81,134.05-46.714,251.853-46.714,251.853
     c-63.755,104.678-307.544,208.75-311.892,210.586l-0.018,0.012c-0.023,0-0.023,0.023-0.042,0
     c-1.869-129.898-90.89-180.128-90.89-180.128c-142.847-92.096-130.66-203.8-130.66-203.8
     c-4.732-131.332,139.373-183.975,139.373-183.975c2.438-0.222,4.893-0.385,7.372-0.507c0,0,124.911-36.562,203.108,50.775
     c0,0,26.912,20.821,45.698,107.647c0,0-0.323-0.752-0.995-2.112c-43.486-102.998-101.067-116.36-101.067-116.36
     c-94.444-31.157-152.614,16.837-152.614,16.837c-3.086,0.648-6.214,1.362-9.362,2.111c0,0-117.966,74.806-39.443,200.729
     c0,0,27.762,38.597,68.384,61.626c0,0,67.025,31.643,108.157,114.912l12.694,35.553c0,0,247.443-73.283,285.365-256.08
     c0,0,31.989-226.81-189.398-180.096c0,0,0,0,0.021-0.021C539.857,358.721,688.494,304.268,740.589,429.952z M406.805,335.833
     c-86.667-22.606-137.424,17.589-137.424,17.589C171.199,421.786,192.2,522.364,192.2,522.364
     c3.373-62.962,65.829-127.63,65.829-127.63C305.25,335.833,406.805,335.833,406.805,335.833z"/>
   <path fill="#0283B0" d="M381.924,892.402c-15.821,3.436-32.152,6.279-48.909,8.411c0,0-3.717-89.016-41.981-129.981
     c0,0-23.359-29.806-75.152-60.938c0,0-73.787-53.476-93.754-129.317c0,0-30.81-81.242,25.043-162.812
     c0,0,56.038-84.878,152.576-93.266c0,0-144.105,52.644-139.373,183.975c0,0-12.187,111.705,130.66,203.8
     C291.034,712.274,380.055,762.504,381.924,892.402z"/>
   <path fill="#72D0F5" d="M269.381,353.422c0,0,50.757-40.196,137.424-17.589c0,0-101.555,0-148.776,58.901
     c0,0-62.456,64.668-65.829,127.63C192.2,522.364,171.199,421.786,269.381,353.422z"/>
   <path fill="#00B3DA" d="M601.462,249.513c0,0,14.074,32.596,62.373,29.673c-9.646,7.798-21.955,12.472-35.317,12.472
     c-31.139,0-56.363-25.248-56.363-56.363c0-25.533,16.958-47.082,40.213-54.006C612.368,181.288,579.12,217.015,601.462,249.513z"
     />
   <path fill="#72D0F5" d="M628.518,178.931c31.115,0,56.36,25.228,56.36,56.363c0,17.731-8.204,33.553-21.022,43.892h-0.021
     c-48.298,2.923-62.373-29.673-62.373-29.673c-22.342-32.498,10.905-68.225,10.905-68.225
     C617.488,179.745,622.908,178.931,628.518,178.931z"/>
   <path fill="#0283B0" d="M290.708,252.904c0,0,17.263,30.873,61.439,24.229c-9.993,9.019-23.213,14.524-37.758,14.524
     c-31.115,0-56.36-25.248-56.36-56.363c0-25.245,16.594-46.614,39.461-53.763C297.49,181.531,264.607,214.213,290.708,252.904z"/>
   <path fill="#00B4DB" d="M314.389,178.931c31.136,0,56.363,25.228,56.363,56.363c0,16.594-7.17,31.523-18.605,41.839
     c-44.176,6.644-61.439-24.229-61.439-24.229c-26.101-38.691,6.782-71.373,6.782-71.373v-0.021
     C302.833,179.825,308.501,178.931,314.389,178.931z"/>
<text transform="matrix(1 0 0 1 954.2656 758.1992)" fill="#0283B0" font-family="'BMJUA'" font-size="339.6665">소소행</text>
<text transform="matrix(1 0 0 1 998.7461 425.6523)" fill="#6D6D6D" font-family="'BMJUA'" font-size="109.1785">장애인 도움 서비스</text>
</svg>
`;


export const sosohappyColorLogo: string = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="702.07px" height="771.077px" viewBox="0 0 702.07 771.077" enable-background="new 0 0 702.07 771.077"
xml:space="preserve">
 <path fill="#72D0F5" d="M684.08,362.177c0,0,11.844,124.564-133.035,250.494c0,0-108.417,89.976-265.847,123.939
   c4.348-1.836,248.136-105.908,311.892-210.586c0,0,99.523-117.803,46.715-251.853c-52.096-125.684-200.732-71.231-202.924-70.437
   c1.664-1.078,81.061-52.241,160.941-0.489C601.822,203.246,681.035,252.501,684.08,362.177z"/>
 <path fill="#0283B0" d="M592.684,295.661c0,0-27.929-113.742-151.824-91.906c221.387-46.714,189.398,180.096,189.398,180.096
   c-37.922,182.797-285.365,256.08-285.365,256.08l-12.694-35.553c0,0,152.836-28.941,223.416-141.662
   C555.615,462.716,612.994,390.105,592.684,295.661z"/>
 <path fill="#0283B0" d="M357.077,208.162c0,0,57.581,13.363,101.067,116.36c-8.651-17.551-74.906-137.566-253.681-99.523
   C204.463,224.999,262.633,177.005,357.077,208.162z"/>
 <path fill="#00B4DB" d="M643.805,274.171c52.809,134.05-46.715,251.853-46.715,251.853
   c-63.756,104.678-307.544,208.75-311.892,210.586l-0.018,0.012c-0.023,0-0.023,0.023-0.042,0
   c-1.869-129.898-90.89-180.128-90.89-180.128c-142.847-92.096-130.66-203.8-130.66-203.8
   c-4.732-131.332,139.373-183.975,139.373-183.975c2.438-0.222,4.893-0.385,7.372-0.507c0,0,124.911-36.562,203.108,50.775
   c0,0,26.912,20.821,45.697,107.647c0,0-0.322-0.752-0.994-2.112c-43.486-102.998-101.067-116.36-101.067-116.36
   c-94.444-31.157-152.614,16.837-152.614,16.837c-3.086,0.648-6.214,1.362-9.362,2.111c0,0-117.966,74.806-39.443,200.729
   c0,0,27.762,38.597,68.384,61.626c0,0,67.025,31.643,108.157,114.912l12.694,35.553c0,0,247.443-73.283,285.365-256.08
   c0,0,31.988-226.81-189.398-180.096c0,0,0,0,0.021-0.021C443.072,202.94,591.709,148.487,643.805,274.171z M310.02,180.053
   c-86.667-22.606-137.424,17.589-137.424,17.589c-98.182,68.364-77.181,168.942-77.181,168.942
   c3.373-62.962,65.829-127.63,65.829-127.63C208.464,180.053,310.02,180.053,310.02,180.053z"/>
 <path fill="#0283B0" d="M285.139,736.622c-15.821,3.436-32.152,6.279-48.909,8.411c0,0-3.717-89.016-41.981-129.981
   c0,0-23.359-29.806-75.152-60.938c0,0-73.787-53.476-93.754-129.317c0,0-30.81-81.242,25.043-162.812
   c0,0,56.038-84.878,152.576-93.266c0,0-144.105,52.644-139.373,183.975c0,0-12.187,111.705,130.66,203.8
   C194.249,556.494,283.27,606.724,285.139,736.622z"/>
 <path fill="#72D0F5" d="M172.596,197.642c0,0,50.757-40.196,137.424-17.589c0,0-101.555,0-148.776,58.901
   c0,0-62.456,64.668-65.829,127.63C95.415,366.584,74.414,266.006,172.596,197.642z"/>
 <path fill="#00B3DA" d="M504.678,93.732c0,0,14.074,32.596,62.372,29.673c-9.646,7.798-21.954,12.472-35.317,12.472
   c-31.139,0-56.363-25.248-56.363-56.363c0-25.533,16.958-47.082,40.213-54.006C515.582,25.508,482.335,61.234,504.678,93.732z"/>
 <path fill="#72D0F5" d="M531.732,23.15c31.115,0,56.36,25.228,56.36,56.363c0,17.731-8.204,33.553-21.022,43.892h-0.021
   c-48.298,2.923-62.372-29.673-62.372-29.673c-22.343-32.498,10.904-68.225,10.904-68.225
   C520.703,23.965,526.123,23.15,531.732,23.15z"/>
 <path fill="#0283B0" d="M193.923,97.124c0,0,17.263,30.873,61.439,24.229c-9.993,9.019-23.213,14.524-37.758,14.524
   c-31.115,0-56.36-25.248-56.36-56.363c0-25.245,16.594-46.614,39.461-53.763C200.705,25.75,167.822,58.433,193.923,97.124z"/>
 <path fill="#00B4DB" d="M217.604,23.15c31.136,0,56.363,25.228,56.363,56.363c0,16.594-7.17,31.523-18.605,41.839
   c-44.176,6.644-61.439-24.229-61.439-24.229c-26.101-38.691,6.782-71.373,6.782-71.373v-0.021
   C206.048,24.045,211.716,23.15,217.604,23.15z"/>
</svg>
`;

export const sosohappyWhiteLogo = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="720.072px" height="762.076px" viewBox="0 0 720.072 762.076" enable-background="new 0 0 720.072 762.076"
xml:space="preserve">
   <path fill="#FFFFFF" d="M447.076,197.969c221.39-46.71,189.399,180.1,189.399,180.1c-37.92,182.8-285.37,256.08-285.37,256.08
     l-12.69-35.55c0,0,152.84-28.939,223.42-141.66c0,0,57.37-72.609,37.06-167.06C598.896,289.879,570.966,176.139,447.076,197.969z
     "/>
   <path fill="#FFFFFF" d="M594.306,73.729c0,17.74-8.2,33.56-21.02,43.9h-0.021c-48.3,2.92-62.37-29.68-62.37-29.68
     c-22.35-32.5,10.9-68.22,10.9-68.22c5.12-1.55,10.54-2.36,16.15-2.36C569.065,17.369,594.306,42.599,594.306,73.729z"/>
   <path fill="#FFFFFF" d="M521.796,19.729c0,0-33.25,35.72-10.9,68.22c0,0,14.07,32.6,62.37,29.68
     c-9.649,7.79-21.95,12.47-35.319,12.47c-31.141,0-56.36-25.25-56.36-56.37C481.586,48.199,498.546,26.649,521.796,19.729z"/>
   <path fill="#FFFFFF" d="M650.016,268.389c-52.09-125.68-200.729-71.23-202.92-70.44c1.66-1.07,81.061-52.24,160.94-0.48
     c0,0,79.22,49.25,82.26,158.93c0,0,11.84,124.56-133.04,250.49c0,0-108.41,89.98-265.84,123.94
     c4.35-1.841,248.13-105.91,311.89-210.591C603.306,520.238,702.826,402.438,650.016,268.389z"/>
   <path fill="#FFFFFF" d="M464.355,318.739c-8.649-17.55-74.899-137.56-253.68-99.52c0,0,58.17-47.99,152.62-16.84
     C363.296,202.379,420.876,215.739,464.355,318.739z"/>
   <path fill="#FFFFFF" d="M291.356,730.839c-1.87-129.9-90.89-180.13-90.89-180.13c-142.85-92.09-130.66-203.8-130.66-203.8
     c-4.73-131.33,139.37-183.97,139.37-183.97c2.44-0.22,4.89-0.39,7.37-0.51c0,0,124.91-36.56,203.11,50.78
     c0,0,26.909,20.82,45.699,107.64c0,0-0.319-0.75-1-2.11c-43.479-103-101.06-116.36-101.06-116.36
     c-94.45-31.15-152.62,16.84-152.62,16.84c-3.08,0.65-6.21,1.36-9.36,2.11c0,0-117.96,74.81-39.44,200.73
     c0,0,27.76,38.601,68.38,61.63c0,0,67.03,31.641,108.16,114.91l12.69,35.55c0,0,247.45-73.279,285.37-256.08
     c0,0,31.99-226.81-189.399-180.1c0,0,0,0,0.02-0.02c2.19-0.79,150.83-55.24,202.92,70.44
     c52.811,134.05-46.71,251.85-46.71,251.85c-63.76,104.681-307.54,208.75-311.89,210.591l-0.02,0.01
     C291.376,730.839,291.376,730.869,291.356,730.839z M167.456,233.169c47.22-58.9,148.78-58.9,148.78-58.9
     c-86.67-22.6-137.42,17.59-137.42,17.59c-98.19,68.37-77.18,168.94-77.18,168.94
     C105.006,297.839,167.456,233.169,167.456,233.169z"/>
   <path fill="#FFFFFF" d="M280.186,73.729c0,16.6-7.17,31.53-18.61,41.84c-44.17,6.65-61.44-24.23-61.44-24.23
     c-26.1-38.69,6.79-71.37,6.79-71.37v-0.02c5.34-1.69,11.01-2.58,16.89-2.58C254.956,17.369,280.186,42.599,280.186,73.729z"/>
   <path fill="#FFFFFF" d="M316.236,174.269c0,0-101.56,0-148.78,58.9c0,0-62.45,64.67-65.82,127.63c0,0-21.01-100.57,77.18-168.94
     C178.816,191.859,229.566,151.669,316.236,174.269z"/>
   <path fill="#FFFFFF" d="M69.806,346.909c0,0-12.19,111.71,130.66,203.8c0,0,89.02,50.229,90.89,180.13
     c-15.82,3.439-32.15,6.28-48.91,8.41c0,0-3.72-89.011-41.98-129.98c0,0-23.36-29.8-75.15-60.939c0,0-73.79-53.471-93.76-129.311
     c0,0-30.81-81.25,25.05-162.82c0,0,56.03-84.87,152.57-93.26C209.176,162.939,65.076,215.579,69.806,346.909z"/>
   <path fill="#FFFFFF" d="M167.456,73.729c0-25.24,16.6-46.61,39.47-53.76c0,0-32.89,32.68-6.79,71.37c0,0,17.27,30.88,61.44,24.23
     c-9.99,9.02-23.21,14.53-37.76,14.53C192.706,130.099,167.456,104.849,167.456,73.729z"/>
</svg>
`;

export const lock: string = `
<svg id="bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/></svg>
`

export const bird: string = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path d="M442,106c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S447.52,106,442,106z"/>
<path d="M256,346c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C266,350.48,261.52,346,256,346z"/>
<path d="M396,246c-5.523,0-10,4.477-10,10c0,49.626-40.374,90-90,90c-5.523,0-10,4.477-10,10s4.477,10,10,10
c60.654,0,110-49.346,110-110C406,250.477,401.523,246,396,246z"/>
<path d="M510.944,151.528L485.775,101.2C474.925,79.488,453.106,66,428.83,66c-19.785,0-38.692,9.384-50.669,25.125
l-28.248,31.787c-7.529-10.706-18.573-18.648-31.296-22.277l-50.53-14.44C229.405,75.142,191.584,45.348,164.32,4.453
c-2.444-3.666-7-5.3-11.218-4.024C148.885,1.706,146,5.594,146,10v53.89c0,25.045,3.751,49.743,11.161,73.574
c-7.766,1.93-15.597,3.545-23.391,4.805C118.5,144.745,102.943,146,87.53,146H10c-3.635,0-6.984,1.973-8.746,5.153
c-1.762,3.18-1.66,7.065,0.267,10.147l59.88,95.811c25.586,40.931,69.65,66.616,117.922,68.732L83.141,434.72
c-14.82,15.153-9.668,40.513,9.908,48.663l52.953,26.153c0.235,0.116,0.474,0.223,0.717,0.32
c15.315,6.12,32.773-1.31,38.954-16.608L222.625,406H296c84.561,0,156-68.691,156-150v-60c0-16.542,13.458-30,30-30h20
c3.466,0,6.685-1.794,8.507-4.743C512.329,158.309,512.494,154.627,510.944,151.528z M166,39.801
c27.558,32.281,61.653,55.641,96.592,65.625l50.535,14.441c9.855,2.812,18.161,9.587,22.925,18.644l-26.581,29.911l-46.696-28.017
c-20.226-12.135-44.298-16.962-68.185-13.096c-7.506,1.217-12.297,2.744-18.192,4.653C169.497,109.92,166,87.067,166,63.89V39.801
z M482,146c-27.57,0-50,22.43-50,50v60c0,70.467-62.28,130-136,130h-80c-28.491,0-54.101,15.829-66.834,41.308l-2.11,4.22
c-2.47,4.94-0.467,10.946,4.473,13.416s10.947,0.466,13.416-4.473c1.164-1.55,8.746-24.079,34.945-32.074l-32.667,77.133
c-0.027,0.063-0.053,0.125-0.078,0.189c-1.984,4.965-7.577,7.54-12.697,5.681c-56.29-27.79-52.898-26.157-53.574-26.426
c-6.682-2.672-8.44-11.266-3.351-16.354c0.345-0.346,21.232-24.014,108.482-122.772c36.682-1.63,71.003-16.714,97.067-42.778
c3.905-3.905,3.905-10.237,0-14.143c-3.905-3.906-10.237-3.905-14.143,0C244.416,313.443,191.575,304.994,185.69,306
c-43.921,0-84.045-22.239-107.33-59.49l-6.394-10.231l7.219,2.817c45.784,17.864,102.954,11.499,142.362-14.775
c4.595-3.064,5.836-9.272,2.773-13.868c-3.064-4.595-9.272-5.837-13.868-2.773c-34.614,23.079-84.445,28.216-123.998,12.784
l-32.233-12.575L28.043,166H87.53c16.482,0,33.116-1.342,49.437-3.988c33.624-5.436,47.75-12.842,60.822-14.96
c18.998-3.075,38.4,0.725,54.698,10.503l78.368,47.019c4.734,2.843,10.878,1.308,13.72-3.428
c2.842-4.735,1.307-10.878-3.428-13.72l-14.224-8.534c70.257-79.077,66.502-74.788,66.978-75.421
C402.105,92.531,415.163,86,428.83,86c16.649,0,31.614,9.25,39.056,24.143L485.818,146H482z"/>
</svg>
`;

export const horse: string = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 511.997 511.997" style="enable-background:new 0 0 511.997 511.997;" xml:space="preserve">
<path d="M378.71,439.523c-3.001-11.524-13.866-19.486-30.616-22.449V394.77c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5
v22.664c0,7.123,5.072,13.161,12.062,14.356c3.884,0.665,11.86,2.504,16.255,6.87h-39.574c0-113.109,0.152-106.436-0.32-107.996
c-3.742-12.391-13.454-47.824-13.454-62.788c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5
c0,4.718,0.737,10.785,1.872,17.337c-18.722,4.49-75.561,14.429-125.904-14.611c2.422-10.481,2.724-21.772-1.203-32.87
c-1.382-3.905-5.667-5.953-9.573-4.568c-3.904,1.381-5.95,5.667-4.568,9.573c8.581,24.252-11.356,52.675-17.672,60.81
c-4.757,6.128-4.479,6.624-20.011,44.636c-2.955,7.23-3.68,15.096-2.097,22.744l9.419,45.526
c1.259,6.078,6.236,10.636,12.387,11.34c7.773,0.891,13.383,4.541,16.717,10.867h-37.731c-0.571,0-1.055-0.409-1.15-0.973
c-0.012-0.071-0.025-0.143-0.039-0.214c-11.583-58.11-15.562-77.031-15.854-80.505c0.264-1,0.914-4.178,3.36-11.157
c0.004-0.01,0.01-0.019,0.013-0.029c9.319-26.582,18.036-27.502-6.834-62.27c-7.853-10.979-9.656-14.116-9.656-14.116
c-6.982-11.157-12.679-23.671-12.679-38.49c0-38.174,23.292-59.357,55.729-59.357c27.8,0,54.168,13.501,92.734,16.869
c4.114,0.354,7.765-2.692,8.125-6.819c0.36-4.126-2.692-7.765-6.819-8.125c-37.256-3.253-63.582-16.925-94.038-16.925
c-19.184,0-36.657,6.524-49.202,18.373c-1.091,1.03-2.127,2.109-3.137,3.21c-14.81-4.965-42.163-9.318-63.278,14.958
c-33.449,38.458,16.277,120.097-6.614,174.904c-5.475,13.112,10.115,24.956,21.186,16.051c9.295-7.475,16.7-15.113,22.558-22.809
l-7.063,61.562c-1.063,7.789,3.576,15.168,11.072,17.576l39.446,12.679c3.9,1.254,8.179,0.526,11.444-1.948
c0.313-0.238,0.602-0.5,0.889-0.763c2.734,2.087,6.137,3.319,9.811,3.319h41.434c8.716,0,14.799-8.674,11.824-16.877
c-2.859-7.881-10.553-21.389-30.036-23.834c-10.065-48.647-11.635-50.274-8.031-59.092c15.277-37.38,14.728-36.928,17.975-41.112
c4.432-5.708,11.324-15.619,16.403-27.635c40.513,22.24,90.418,25.223,133.652,14.844c3.46,15.294,7.705,29.881,8.919,33.974
v104.975c0,8.137,6.619,14.756,14.756,14.756h46.177c3.525,0,6.784-1.601,8.943-4.391
C378.868,446.483,379.596,442.932,378.71,439.523z M68.115,315.682c2.729-21.076-1.688-41.067-6.178-57.777
c3.695,9.754,9.43,18.788,9.43,18.788C80.704,305.85,77.432,304.479,68.115,315.682z M20.958,369.174
c20.288-58.015-23.289-136.788,2.329-166.238c11.119-12.785,26.108-16.277,42.791-11.92c-1.613,2.985-3.285,6.711-4.575,10.429
c-30.886,4.808-21.464,33.572-16.04,53.115C54.815,288.25,66.397,329.963,20.958,369.174z M57.636,218.218
c-0.998,7.859-1.165,16.549,0.256,24.927C53.997,228.461,53.215,220.934,57.636,218.218z M87.321,339.542
c-5.089,6.248-8.652,12.501-9.653,21.823l-4.964,46.223c-0.663,6.172,2.682,12.036,8.323,14.588
c7.126,3.227,11.349,8.418,12.588,15.461l-35.919-11.546c-0.543-0.174-0.878-0.711-0.797-1.277
c0.011-0.072,0.02-0.144,0.028-0.216l9.189-80.072c0.473-4.135,16.348-22.633,19.355-26.055c3.279-3.729,5.115-7.805,5.929-12.147
C98.783,319.273,94.504,319.488,87.321,339.542z M93.06,411.72c-1.631-1.071-3.416-2.08-5.39-2.999l1.67-15.547
c0.167,0.834,0.334,1.665,0.509,2.538C90.794,400.419,91.86,405.733,93.06,411.72z"/>
<path d="M509.59,181.95l-17.396-30.312l-3.233-19.4c-0.162-0.977-0.517-1.911-1.042-2.75l-14.14-22.563
c-0.498-0.795-0.749-1.718-0.726-2.667c0.197-7.697-0.93-27.224-15.624-42.29c-4.695-4.815-12.467-4.85-17.228-0.045
c-0.24,0.242-0.492,0.504-0.751,0.778c-8.141,0.617-30.03,3.201-55.385,13.848c-28.624,12.019-67.059,36.987-89.184,87.776
c-8.353,3.296-21.61,7.302-39.617,9.01c-4.124,0.391-7.149,4.051-6.759,8.176c0.369,3.883,3.635,6.792,7.458,6.792
c0.237,0,0.477-0.011,0.717-0.034c15.845-1.503,32.193-5.056,46.836-11.287c5.96-2.556,9.327-4.633,9.327-4.633
c0.392-0.234,0.135-0.082,0.377-0.228c0.108-0.066,0.211-0.131,0.229-0.142c0.031-0.019,0.106-0.067,0.112-0.071
c0.399-0.257,0.772-0.552,1.116-0.88c31.085-29.696,71.847-52.26,112.175-63.684c0.609,3.152,1.495,6.444,2.735,9.886
c1.405,3.897,5.705,5.916,9.601,4.511c3.896-1.405,5.916-5.702,4.512-9.6c-5.374-14.905-2.918-27.665,5.077-37.347
c0.002-0.002,0.004-0.005,0.006-0.008c8.718,10.633,9.411,23.699,9.273,29.09c-0.099,3.906,0.942,7.716,3.011,11.017
l13.343,21.291l3.209,19.251c0.146,0.88,0.448,1.727,0.893,2.5l18.066,31.481c0.765,1.332,0.396,3.006-0.858,3.894l-7.063,4.999
c-1.313,0.929-3.125,0.785-4.314-0.342c-13.555-12.859-28.563-20.367-36.301-23.699c-4.573-1.968-5.601-5.192-8.905-11.524
c-3.575-6.858-12.303-9.107-18.729-4.875c-34.595,22.776-51.736,57.008-50.987,63.527c1.07,9.372,1.061,46.222-23.645,75.119
c-0.604,0.707-1.071,1.519-1.379,2.396c-11.831,33.801-11.305,31.811-11.305,33.573v27.281c0,4.142,3.357,7.501,7.5,7.501
s7.5-3.358,7.5-7.501v-26.004l4.898-13.994c9.072,4.122,16.054,5.473,28.651,7.981c31.948,6.354,33.219,8.995,33.219,53.823
c0,7.818,6.359,14.177,14.178,14.177h30.132c7.27,0,12.982-6.275,12.262-13.501c-1.104-11.03-6.26-19.041-14.547-22.633
c-1.787-15.304-9.079-50.635-38.547-66.856c-26.691-14.692-33.14-24.972-34.065-26.666c-0.366-1.403-1.26-4.611-2.817-8.953
c3.831-16.752,3.398-30.425,3.043-35.451c10.832-25.985,31.951-42.937,42.346-50.072c2.514,4.817,5.579,12.262,15.266,16.431
c6.821,2.936,20.039,9.543,31.906,20.801c6.365,6.038,16.165,6.758,23.306,1.705l7.063-4.999
C511.99,200.174,514.226,190.027,509.59,181.95z M426.052,92.004c-35.137,9.417-72.848,28.174-102.833,51.784
c24.63-35.941,63.63-57.741,105.862-64.685C427.542,83.102,426.484,87.51,426.052,92.004z M411.108,305.899
c24.494,13.483,29.888,46.381,30.958,56.144c0.55,5.014,3.866,9.326,8.655,11.251c3.074,1.237,4.581,4.346,5.302,7.453h-26.159
c0-0.172,0.002-16.867-0.004-17.039c-1.383-41.94-19.799-45.603-45.289-50.673c-12.361-2.459-18.61-3.654-26.599-7.493l0.13-0.37
c6.901-8.3,12.328-17.347,16.436-26.838C379.555,284.582,389.919,294.237,411.108,305.899z"/>
<circle cx="460.888" cy="146.499" r="6.833"/>
</svg>
`;

export const fish: string = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 511.997 511.997" style="enable-background:new 0 0 511.997 511.997;" xml:space="preserve">
<path d="M510.646,261.469C468.003,185.134,397.9,138.456,315.733,129.806c-41.195-52.03-170.456-65.211-176.035-65.754
c-3.635-0.375-7.292,1.208-9.521,4.167c-2.24,2.938-2.792,6.833-1.458,10.281c12.673,32.896,25.656,70.313,29.092,85.621
c-23.473,10.741-43.99,22.163-57.217,31.681c-28.688-45.896-87.25-46.469-89.927-46.469C4.771,149.333,0,154.104,0,160
c0,61.802,21.542,92.823,35.948,106.667C21.542,280.51,0,311.531,0,373.333C0,379.229,4.771,384,10.667,384
c2.677,0,61.24-0.573,89.927-46.469c17.573,12.646,47.957,28.637,81.159,41.931c-7.337,11.867-11.086,30.742-11.086,57.871
c0,5.896,4.771,10.667,10.667,10.667c3.172,0,75.708-0.629,111.832-43.003c91.87-1.775,170.978-49.891,217.48-133.133
C512.448,268.635,512.448,264.698,510.646,261.469z M154.906,87.417c35.841,5.188,94.682,17.952,127.934,40.799
c-30.66,1.198-69.78,12.79-105.243,27.336C172.875,136.802,162.398,107.509,154.906,87.417z M192.25,426.052
c1.421-29.671,8.267-37.254,10.186-38.806c20.786,7.296,41.846,13.094,60.969,16.004
C240.266,419.531,208.723,424.598,192.25,426.052z M201.198,386.854l0.004-0.029c0.029,0.01,0.059,0.018,0.087,0.029
C201.229,386.846,201.262,386.863,201.198,386.854z M288,384c-62.333,0-164.25-51.177-183.125-70.49
c-2.021-2.073-4.781-3.208-7.625-3.208c-0.646,0-1.302,0.063-1.948,0.177c-3.49,0.646-6.438,3-7.844,6.26
c-14.396,33.385-48.25,42.5-65.844,44.99c3.333-66.844,34.969-84.708,36.594-85.573c3.51-1.802,5.677-5.438,5.729-9.385
c0.052-3.99-2.188-7.708-5.719-9.583c-1.427-0.76-33.25-18.5-36.604-85.521c17.583,2.573,51.562,11.823,65.844,44.927
c1.406,3.26,4.354,5.615,7.844,6.26c3.521,0.656,7.094-0.49,9.573-3.031c18.875-19.313,120.792-70.49,183.125-70.49
c84.219,0,157.167,42.677,201.042,117.333C445.167,341.323,372.219,384,288,384z"/>
<path d="M320,266.666c0-49.083,19.365-79.146,19.563-79.448c3.229-4.917,1.875-11.521-3.021-14.771
c-4.896-3.229-11.5-1.906-14.75,2.969c-0.948,1.417-23.125,35.333-23.125,91.25c0,55.917,22.177,89.833,23.125,91.25
c2.052,3.083,5.438,4.75,8.885,4.75c2.031,0,4.083-0.583,5.906-1.792c4.906-3.271,6.229-9.885,2.958-14.792
C339.344,345.792,320,316.198,320,266.666z"/>
<path d="M293.875,172.448c-4.906-3.229-11.49-1.906-14.75,2.969C278.177,176.833,256,210.75,256,266.666
c0,29.865,6.437,53.333,11.844,67.76c1.604,4.281,5.667,6.927,9.99,6.927c1.24,0,2.51-0.219,3.74-0.677
c5.521-2.063,8.313-8.208,6.25-13.729c-4.781-12.781-10.49-33.615-10.49-60.281c0-49.083,19.365-79.146,19.563-79.448
C300.125,182.302,298.771,175.698,293.875,172.448z"/>
<circle cx="383.999" cy="234.665" r="21.333"/>
</svg>
`
