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


import { Model3 } from './model3';

/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 业务消息
     * @type {string}
     * @memberof InlineResponse2004
     */
    message: string;
    /**
     * 业务状态码
     * @type {number}
     * @memberof InlineResponse2004
     */
    code: number;
    /**
     * 
     * @type {Model3}
     * @memberof InlineResponse2004
     */
    data: Model3;
}


