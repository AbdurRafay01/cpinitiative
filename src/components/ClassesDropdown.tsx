import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ClassesDropdown({
  dark = false
}): JSX.Element {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <div className="relative h-full">
          <Menu.Button
            className={classNames(
              "group inline-flex items-center h-full px-1 pt-1 border-b-2 border-transparent text-sm leading-6 font-medium transition ease-in-out duration-150",
              dark
                ? "text-gray-400 hover:text-gray-200 hover:border-transparent focus:outline-none focus:text-gray-200"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300",
              open ? (dark ? "text-gray-200" : "text-gray-700") : (dark ? "text-gray-400" : "text-gray-500"),
            )}
          >
            Classes
            <ChevronDownIcon
              className={classNames(
                "h-5 w-5 ml-2 group-hover:text-gray-500 transition ease-in-out duration-150",
                dark
                  ? "text-gray-400 group-hover:text-gray-200 group-focus:text-gray-200"
                  : "text-gray-500 group-hover:text-gray-700 group-focus:text-gray-700",
                open ? (dark ? "text-gray-200" : "text-gray-700") : (dark ? "text-gray-400" : "text-gray-500"),
              )}
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={classNames(
              "origin-top-right absolute left-0 -mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              dark ? "bg-gray-800" : "bg-white"
            )}>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/classes"
                      className={classNames(
                        active ? (dark ? 'bg-gray-600' : 'bg-gray-100 text-gray-900') : (!dark && 'text-gray-700'),
                        'block px-4 py-2 text-sm font-medium',
                        dark && 'text-gray-200',
                      )}
                    >
                      Live Classes
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/video-classes"
                      className={classNames(
                        active ? (dark ? 'bg-gray-600' : 'bg-gray-100 text-gray-900') : (!dark && 'text-gray-700'),
                        'block px-4 py-2 text-sm font-medium',
                        dark && 'text-gray-200',
                      )}
                    >
                      Self-Study Classes
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}