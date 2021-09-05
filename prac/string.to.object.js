class HeaderListData {
  constructor(source, separator = ',') {
    const rawData = source.split('\n');

    this.headers = rawData[0].split(separator);
    this.rows = rawData
      .filter((row, index) => index > 0)
      .map(row => row.split(separator));
  }

  row = index => this.rows[index]
    .map((row, index) => [this.headers[index], row]);

  get length() {
    return this.rows.length;
  }
  get columnLength() {
    return this.headers.length;
  }
}

export default class MakeObject extends HeaderListData {
  toObject = index => this
    .row(index)
    .reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

  toAllObject = () =>
    Array(this.length)
      .fill(0)
      .map((notUse, index) => this.toObject(index))
}

const [userinfo, setUserinfo] = useState({
  iam: "익명의.지은이",
  selfLetter: "안녕하세요 익명의 지은이입니다."
});

useEffect(() => {
  function getUserId() {
    firebase_db.ref(`users/${myitem.user_uid}`)
      .on('value', (snapshot) => {
        let user = snapshot.val();
        if (user) {
          setUserinfo(userinfo);
        }
      })
  }

}, []);

const { iam, selfLetter } = userState;
console.log(iam);
console.log(selfLetter);