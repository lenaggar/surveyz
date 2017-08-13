import React, { PureComponent } from 'react'
import { Link } from 'react-router'

export default class Form extends PureComponent {
  render () {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='text-left'>
            <Link to='/surveys' className='btn btn-info'>Back</Link>
          </div>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h2 className='panel-title text-center'>Create a new Survey!</h2>
            </div>
            <div className='panel-body'>
              <form name='product-form' action='' onSubmit={() => this.props.submit()} noValidate>

                <div className='form-group text-left'>
                  <label htmlFor='title'>Title</label>
                  <input id='title' name='title' type='text' className='form-control' placeholder='Enter the title' onChange={() => this.props.setGame()} />
                </div>

                <div className='form-group text-left'>
                  <label htmlFor='owner'>Owner</label>
                  <input id='owner' name='owner' type='text' className='form-control' placeholder='Who is the owner?' onChange={() => this.props.setGame()} />
                </div>

                <button type='submit' className='btn btn-submit btn-block'>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
