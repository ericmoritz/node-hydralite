// -*- mode: javascript -*- 
import {Namespace, Class, Property} from 'jsonld-dsl'
import {Set} from 'immutable'

export const ns = Namespace(
  Class('Operation'),
  Class('CreateResourceOperation'),
  Class('ReplaceResourceOperation'),
  Class('DeleteResourceOperation'),    
  Property('method'),
  Property('expects'),
  Property('returns'),
  Property('statusCodes'),
  Property('operation')
)

const operationFactory = (method) => (...properties) => ns.operation(
  Set.of(
    ns.Operation(
      ns.method(method),
        ...properties
    )
  )
)

export {Resource, URI, type} from 'jsonld-dsl'
export const PUT = operationFactory('PUT')
export const POST = operationFactory('POST')
export const DELETE = operationFactory('DELETE')
