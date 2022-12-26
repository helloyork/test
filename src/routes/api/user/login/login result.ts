
interface LoginResult {
    pass: Boolean,
    code: LoginResultCode,
    message: String | null,
    result: LoginResultValue | never
}

interface LoginResultCode {
    1: '身份验证失败'
    2: '数据库错误'
    3: '用户不存在'
    4: '密码错误'
}

interface LoginResultValue {
    userkey: String,
    username: String,
    password: String,
    value: UserResult
}

interface UserResult {
    coin: Number,
    uuid: String
}


//{ pass: false, code: 1, message: '请提交有效信息', result: {} }