export default function PasswordStrengthBackground() {
  return (
    <div className='app-39'>
      <div className='body'>
        <div
          className='background'
          id='background'></div>
        <div className='bg-white rounded p-10 text-center shadow-md'>
          <h1 className='text-3xl'>Image Password Strength</h1>
          <p className='text-sm text-gray-700'>Change the password to see the effect</p>
          <div className='my-4 text-left'>
            <label
              for='email'
              className='text-gray-900'>
              Email
            </label>
            <input
              type='text'
              className='border block w-full p-2 mt-2 rounded'
              id='email'
              placeholder='Enter email'
            />
          </div>

          <div className='my-4 text-left'>
            <label
              for='email'
              className='text-gray-900'>
              Password:
            </label>
            <input
              type='password'
              className='border block w-full p-2 mt-2 rounded'
              id='password'
              placeholder='Enter Password'
            />
          </div>

          <button
            className='bg-black text-white py-2 mt-4 inline-block w-full rounded'
            type='submit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
