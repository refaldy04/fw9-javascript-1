const mtk = 90;
const bahasaIndonesia = 'sdgdg';
const bahasaInggris = 89;
const ipa = 95;

const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

switch (typeof rataRata == 'number' && rataRata != NaN) {
  case rataRata >= 90:
    console.log('Grade = A');
    break;
  case rataRata < 90 && rataRata >= 80:
    console.log('Grade = B');
    break;
  case rataRata < 80 && rataRata >= 70:
    console.log('Grade = C');
    break;
  case rataRata < 70 && rataRata >= 60:
    console.log('Grade = D');
    break;
  case rataRata < 60:
    console.log('Grade = E');
    break;
  default:
    console.log('Input Salah');
}
