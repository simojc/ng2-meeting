/**
import { InjectionToken } from '@angular/core';

import { OpaqueToken } from 'jQuery';

export let JQ_TOKEN = new OpaqueToken('jQuery')


 * Creates a token that can be used in a DI Provider.
 *
 * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, callable type, array or
 * parametrized type.
 *
 * `InjectionToken` is parameterized on `T` which is the type of object which will be returned by
 * the `Injector`. This provides additional level of type safety.
 *
 * ```
 * interface MyInterface {...}
 * var myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
 * // myInterface is inferred to be MyInterface.
 * ```
 *
 * ### Example
 *
 * {@example core/di/ts/injector_spec.ts region='InjectionToken'}
 *
 * @stable
 */
//export declare class InjectionToken<T> extends OpaqueToken {
//  private _differentiate_from_OpaqueToken_structurally;
//  constructor(desc: string);
//  toString(): string;
//}
