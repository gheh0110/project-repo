import {Entity, model, property} from '@loopback/repository';

@model()
export class Example extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'number',
  })
  phone?: number;

  @property({
    type: 'number',
  })
  age?: number;

  @property({
    type: 'boolean',
  })
  is_researcher?: boolean;


  constructor(data?: Partial<Example>) {
    super(data);
  }
}

export interface ExampleRelations {
  // describe navigational properties here
}

export type ExampleWithRelations = Example & ExampleRelations;
