import { ElMessage } from "element-plus";
import { Tools } from "./tools";
export namespace Messages {
    export function formErrors(error: any, defaultMessage: string) {
        if (error && error.response && error.response.data && typeof error.response.data === 'object' && Object.keys(error.response.data).length > 0) {
            const msgs = Tools.getAllValues(error.response.data)
            for (const msg of msgs) {
                ElMessage.error(msg);
            }
        } else {
            ElMessage.error(defaultMessage);
        }
    };
}