import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import {Form, InputField, CheckboxField, TextareaField} from '../src/index'

const initialValue = Immutable.fromJS({
  name: 'name',
  password: 'password',
  color: '#888888',
  adult: true,
  description: 'Foo\nBar'
})

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Form</h1>
        <div>
          <Form name="form" value={initialValue} onSubmit={this.onSubmit}>
            <div>
              <div>
                <InputField name="name" type="text"/>
              </div>
              <div>
                <InputField name="password" type="password"/>
              </div>
              <div>
                <InputField name="color" type="color"/>
              </div>
              <div>
                <CheckboxField name="adult"/>
              </div>
              <div>
                <TextareaField name="description" rows={6}/>
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    )
  }

  onSubmit = (value) => {
    console.log(value.toJS()) // eslint-disable-line no-console
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))