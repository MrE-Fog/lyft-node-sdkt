/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';


/**
* Enum class RideProfileEnum.
* @enum {}
* @readonly
*/
export default class RideProfileEnum {
    
        /**
         * value: "personal"
         * @const
         */
        personal = "personal";

    
        /**
         * value: "business"
         * @const
         */
        business = "business";

    

    /**
    * Returns a <code>RideProfileEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RideProfileEnum} The enum <code>RideProfileEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

