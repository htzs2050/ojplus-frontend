// tslint:disable
/**
 * OJPlus
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * 用户名，学号/工号
     * @type {string}
     * @memberof InlineObject2
     */
    username: string;
    /**
     * 密码
     * @type {string}
     * @memberof InlineObject2
     */
    password?: string;
    /**
     * 昵称
     * @type {string}
     * @memberof InlineObject2
     */
    nickname?: string;
    /**
     * 邮箱
     * @type {string}
     * @memberof InlineObject2
     */
    email?: string;
    /**
     * 班级
     * @type {string}
     * @memberof InlineObject2
     */
    className?: string;
    /**
     * 禁用态
     * @type {boolean}
     * @memberof InlineObject2
     */
    disable?: boolean;
    /**
     * 旧密码，当传入密码时必填
     * @type {string}
     * @memberof InlineObject2
     */
    oldPassword?: string;
    /**
     * 邮箱验证码，当传入邮箱时必填
     * @type {string}
     * @memberof InlineObject2
     */
    verification?: string;
}

