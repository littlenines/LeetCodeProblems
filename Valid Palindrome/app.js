let s = "A man, a plan, a canal: Panama";
s = s.replace(/[^a-zA-Z0-9]/g,'');
s = s.toLowerCase();

let reversed = s.split('').reverse().join('');
if (s === reversed) {
    console.log('Palindrom');
}
