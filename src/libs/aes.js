import CryptoJS from 'crypto-js'//加密function getAesString(data,key,iv){  key  = CryptoJS.enc.Utf8.parse(key);  iv   = CryptoJS.enc.Utf8.parse(iv);  let encrypted =CryptoJS.AES.encrypt(data,key,    {      iv:iv,      mode:CryptoJS.mode.CBC,      padding:CryptoJS.pad.Pkcs7    });  return encrypted.toString();}//解密function getDAesString(encrypted,key,iv){  key  = CryptoJS.enc.Utf8.parse(key);  iv   = CryptoJS.enc.Utf8.parse(iv);  let decrypted =CryptoJS.AES.decrypt(encrypted,key,    {      iv:iv,      mode:CryptoJS.mode.CBC,      padding:CryptoJS.pad.Pkcs7    });  return decrypted.toString(CryptoJS.enc.Utf8);}//加密export function setAES(data){  let key  = 'F8TKUHYJ$p5^z%ve';  let iv   = 'hH98VDicbBE9j7k8';  let encrypted =getAesString(data,key,iv);  // let encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);  return encrypted;}//解密export function getAES(data){  let key  = 'F8TKUHYJ$p5^z%ve';  let iv   = 'hH98VDicbBE9j7k8';  let decryptedStr =getDAesString(data,key,iv);  return decryptedStr;}