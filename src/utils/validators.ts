export namespace Validators {
    export function isQQEmail(email: string): boolean {
        const qqEmailRegex = /^\d{5,10}@qq\.com$/;
        return qqEmailRegex.test(email);
    }
    export function isNumeric(str: string): boolean {
        return /^\d+$/.test(str);
    }
    export function isValidPassword(password: string): [boolean, string] {
        if (password.trim() === '') {
            return [false, "请输入密码"] as const
        }
        if (password.length < 8 || password.length > 24) {
            return [false, "密码长度为8~24位"] as const
        }
        let cnt = 0
        for (const char of password) {
            if (/[a-z]/.test(char)) {
                cnt++
            }
            if (/[A-Z]/.test(char)) {
                cnt++
            }
            if (/[0-9]/.test(char)) {
                cnt++
            }
            if (/[^a-zA-Z0-9]/.test(char)) {
                cnt++
            }
        }
        if (cnt < 2) {
            return [false, "必须包含大小写字母、数字、符号中的至少2种"] as const
        }
        return [true, ""]
    }
}