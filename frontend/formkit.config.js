import { generateClasses } from '@formkit/themes'
const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'space-y-2 mb-3',
        label: 'float-left block font-normal text-gray-400 text-lg',
        input: 'w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-tolko-red',
        message: 'text-tolko-red text-sm',
        help: 'text-sm text-end'
      },
      submit: {
        input: '$reset py-3 text-base font-medium rounded text-white bg-tolko-red w-full hover:opacity-85 transition duration-300'

      }
    })
  }
}

export default config