import CryptoJS from 'crypto-js';
import moment from 'moment';

export const key = CryptoJS.enc.Utf8.parse('0000000000000000');
// export const key = "0000000000000000";

function encrypto(word: string) {
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypto = CryptoJS.AES.encrypt(word, key, {
    mode: CryptoJS.mode.ECB,
  });
}

function decrypto(textBase64: string) {
  var decrypt = CryptoJS.AES.decrypt(textBase64, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt);
}

function getDuringTime(curTime: string = '', duration: number = 0): string {
  let curTimeStamp = new Date(curTime).getTime();
  let endTimeStamp = curTimeStamp + duration * 1000;
  let curHour = moment(curTimeStamp).format('LT');
  let endHour = moment(endTimeStamp).format('LT');
  return `${curHour.toLowerCase()} - ${endHour.toLowerCase()}`;
}

function getDateTime(curTime: string = ''): string {
  let rs = moment(curTime).format('LLLL').split(',');
  return `${rs[0]},${rs[1]}`;
}

export { encrypto, decrypto, getDuringTime, getDateTime };
