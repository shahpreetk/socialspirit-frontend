import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer items-center mt-28 p-8 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <figure>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="/socialspiritLogo.png" alt="social spirit" />
              </div>
            </div>
          </figure>
          <p>Copyright © 2022 - All rights reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-center">
          <p>Made with &hearts; by Preet Shah for MSc. Dissertation</p>
        </div>
      </footer>
    </>
  )
}

export default Footer