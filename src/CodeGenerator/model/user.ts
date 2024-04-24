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

import { RequestFile } from '../api';

/**
* 用户
*/
export class User {
    /**
    * 序号
    */
    'id': number;
    /**
    * 用户名，学号/工号
    */
    'username': string;
    /**
    * 密码
    */
    'password': string;
    /**
    * 姓名
    */
    'name': string;
    /**
    * 昵称
    */
    'nickname'?: string;
    /**
    * 邮箱
    */
    'email': string;
    /**
    * 班级
    */
    'className'?: string;
    /**
    * 经验值
    */
    'exp'?: number;
    /**
    * 权限
    */
    'role'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "className",
            "baseName": "className",
            "type": "string"
        },
        {
            "name": "exp",
            "baseName": "exp",
            "type": "number"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

