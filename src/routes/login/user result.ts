interface User {
    userkey: String,
    username: String,
    password: String,
    value: UserResult
}
interface UserResult {
    coin: Number,
    uuid: String
}
