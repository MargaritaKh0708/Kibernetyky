interface ISubscriptionBlockSvgSelector {
  id: string;
}

export const SubscriptionBlockSvgSelector: React.FC<
  ISubscriptionBlockSvgSelector
> = ({ id }) => {
  switch (id) {
    case 'logo':
      return (
        <svg
          viewBox='0 0 134 171'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M113.045 39.9916C111.426 37.4614 106.226 26.8166 104.607 24.2864C103.809 23.0423 102.979 21.6508 103.199 20.19C103.471 18.3922 105.195 17.2345 106.765 16.3179C108.705 15.1862 110.707 14.0572 112.918 13.6656C114.018 13.4722 115.217 13.4842 116.17 14.0689C116.848 14.4847 117.332 15.148 117.78 15.8046C119.954 19.0009 125.265 30.6149 126.486 34.2816L113.045 39.9916Z'
            fill='#1D1D1E'
          />
          <path
            d='M131.459 33.2C130.99 32.9325 130.478 32.8918 129.955 32.978C130.666 32.5076 131.327 31.9633 131.844 31.2878C132.564 30.3472 132.98 29.1203 132.733 27.9626C132.312 25.9881 130.081 24.828 128.068 24.9593C126.057 25.0907 124.248 26.1913 122.595 27.3441C120.861 28.5546 116.807 31.0945 117.644 33.7156C118.135 35.2529 119.593 35.7926 121.175 35.8592C121.141 35.8667 121.109 35.8714 121.075 35.8785C120.151 36.055 119.071 36.4755 118.363 37.1602C118.453 36.4158 118.332 35.6803 117.913 35.0169C117.44 34.2694 116.665 33.7705 115.882 33.3599C114.04 32.3978 111.964 31.7965 109.89 31.9372C107.816 32.0779 105.75 33.0233 104.51 34.6921C103.221 36.4251 102.941 38.7097 102.999 40.8678C103.057 43.0283 104.663 56.504 98.1339 66.2987C88.7173 80.4238 62.822 69.2421 62.822 69.2421L62.1143 69.3258C68.2569 65.0357 72.2383 58.1607 72.2383 50.4071C72.2383 37.4064 61.04 26.8668 47.226 26.8668C33.4119 26.8668 22.2134 37.4064 22.2134 50.4071C22.2134 60.345 28.7566 68.8457 38.0091 72.3002C34.5927 76.5326 27.7644 79.6598 22.4427 80.6719C-7.21318 86.3083 -3.68198 106.318 15.2269 109.049C16.3475 109.209 17.4952 109.309 18.6172 109.366L18.3569 109.651C17.5888 110.596 16.1281 110.818 15.4899 111.854C14.9982 112.651 15.1592 113.694 15.531 114.554C15.8335 115.253 16.2923 115.924 16.9707 116.27C17.5981 116.592 18.3518 116.6 19.032 116.416L19.5997 116.399C19.2032 117.022 18.9779 117.769 19.1153 118.488C19.308 119.495 20.1791 120.264 21.1392 120.624C22.0994 120.985 23.1481 121.009 24.1735 121.026L24.8894 120.347C24.5199 122.002 25.771 123.761 27.3773 124.389C29.954 125.396 32.9902 124.029 34.6832 121.839C36.376 119.65 36.9961 116.831 37.3894 114.093C38.0608 109.414 37.9882 104.057 34.656 100.703C33.33 99.3687 31.6087 98.4976 29.8566 97.812C26.5641 96.5231 23.0471 95.8117 19.5127 95.7162C26.8965 95.3437 33.9253 91.2306 38.1037 85.1313C38.2217 99.3114 38.2767 113.685 38.3944 127.864C38.5288 127.889 38.6635 127.908 38.7976 127.932C38.6492 148.32 37.085 168.7 34.1197 188.875C26.1978 188.077 18.0331 192.947 14.9688 200.295C14.4952 201.431 14.1321 202.701 14.4922 203.878C15.2664 206.408 18.5925 206.872 21.2369 206.85C29.3769 206.781 37.5155 206.549 45.6458 206.153C46.9263 200.149 45.4182 137.261 46.9317 129.271H49.6583C51.1719 137.261 49.6638 200.149 50.9439 206.153C59.0746 206.549 67.213 206.781 75.3531 206.85C77.9976 206.872 81.3237 206.408 82.0977 203.878C82.4576 202.701 82.0946 201.431 81.6213 200.295C78.5568 192.947 70.3919 188.077 62.47 188.875C59.5014 168.676 57.9369 148.86 57.7914 128.447L54.9213 128.356C57.9895 127.989 61.0276 127.368 63.9913 126.492C62.7322 112.097 59.2908 83.3647 59.2908 83.3647C66.4404 84.9976 108.113 108.07 122.643 48.8148C122.846 48.7883 123.498 48.6405 125.318 48.1511C127.114 47.6663 128.796 46.5947 129.769 45.0095C130.146 44.396 130.416 43.6871 130.367 42.9687C130.317 42.25 129.892 41.5288 129.217 41.2785C128.405 40.9778 127.527 41.3932 126.706 41.6673C125.91 41.9348 125.09 42.0613 124.263 42.0971C124.634 42.0496 125.003 41.985 125.366 41.906C128.22 41.2855 131.049 39.6383 132.174 36.9431C132.71 35.6589 132.667 33.89 131.459 33.2001V33.2Z'
            fill='#F9E505'
          />
          <path
            d='M20.0017 110.016C18.3459 110.016 16.7249 109.901 15.1418 109.674C10.718 109.034 6.93449 107.449 4.20013 105.086C1.55986 102.804 0.0692033 99.8939 0.00247964 96.8907C-0.0766618 93.3435 1.74001 89.9487 5.25581 87.0769C9.1856 83.8685 14.9307 81.5267 22.3314 80.1205C27.3067 79.1751 34.218 76.184 37.6348 71.8489C37.8394 71.5911 38.2145 71.5455 38.4732 71.751C38.732 71.9539 38.7767 72.3286 38.5725 72.5888C34.9655 77.1628 27.7407 80.3091 22.5542 81.2927C6.61853 84.3221 1.07251 91.3237 1.19572 96.8646C1.25484 99.5262 2.59893 102.123 4.98044 104.181C7.54217 106.396 11.1146 107.886 15.3123 108.492C20.4456 109.232 26.0124 108.726 31.8577 106.984C32.1735 106.888 32.5059 107.07 32.6002 107.385C32.6942 107.702 32.5143 108.034 32.1986 108.127C27.9802 109.385 23.8959 110.016 20.0017 110.016V110.016Z'
            fill='#1D1D1E'
          />
          <path
            d='M24.1733 121.658C24.1697 121.658 24.1661 121.658 24.1626 121.658C23.1475 121.639 21.9969 121.62 20.9292 121.219C19.6623 120.744 18.7426 119.753 18.5287 118.636C18.3548 117.727 18.6373 116.698 19.3037 115.817C19.5026 115.552 19.8765 115.499 20.1396 115.7C20.4027 115.898 20.4548 116.273 20.2563 116.536C19.7927 117.149 19.5905 117.831 19.7013 118.412C19.864 119.264 20.6589 119.844 21.3485 120.102C22.2237 120.429 23.2202 120.448 24.1838 120.465C24.5133 120.47 24.7758 120.742 24.77 121.071C24.7643 121.398 24.4981 121.658 24.1734 121.658L24.1733 121.658Z'
            fill='#1D1D1E'
          />
          <path
            d='M18.1439 117.171C17.623 117.171 17.1295 117.058 16.6988 116.839C15.9782 116.469 15.4012 115.793 14.9833 114.827C14.6744 114.113 14.2636 112.74 14.9821 111.575C15.4047 110.89 16.0911 110.508 16.6967 110.169C17.166 109.909 17.6089 109.661 17.8943 109.31C18.1024 109.054 18.4782 109.016 18.7337 109.224C18.9894 109.434 19.0279 109.809 18.8196 110.064C18.39 110.591 17.8247 110.907 17.2778 111.212C16.7533 111.504 16.2576 111.781 15.998 112.203C15.5473 112.934 15.9044 113.95 16.0788 114.354C16.3837 115.058 16.7751 115.536 17.2424 115.777C17.6895 116.003 18.2692 116.039 18.8757 115.875C19.5138 115.7 20.094 115.342 20.5775 115.013C22.7911 113.511 24.6274 111.442 26.2471 109.615C26.3597 109.489 26.5482 109.274 26.556 109.145C26.5761 108.816 26.8616 108.558 27.1875 108.584C27.5166 108.606 27.7673 108.887 27.7473 109.216C27.715 109.758 27.369 110.148 27.1403 110.408C25.4738 112.284 23.5849 114.414 21.2481 116.001C20.7162 116.362 20.0013 116.805 19.1885 117.027C18.8355 117.123 18.4838 117.171 18.1438 117.171H18.1439Z'
            fill='#1D1D1E'
          />
          <path
            d='M82.1949 74.0695C80.5124 74.0695 78.7354 73.9451 76.8666 73.6946C69.2226 72.6655 62.6504 69.8534 62.5853 69.8249C62.2823 69.6935 62.1428 69.3426 62.2738 69.0395C62.4043 68.7387 62.7559 68.5977 63.058 68.729C63.1224 68.7555 69.5646 71.5102 77.0497 72.513C86.9446 73.8401 93.8722 71.6511 97.6371 66.0031C103.434 57.3089 102.695 45.6735 102.453 41.8517C102.428 41.4527 102.408 41.1354 102.402 40.9204C102.326 38.0892 102.859 35.9478 104.03 34.3723C105.304 32.6587 107.479 31.5387 109.849 31.3788C111.851 31.2431 114.033 31.7559 116.158 32.8686C116.908 33.2601 117.843 33.826 118.417 34.733C119.431 36.3347 119.224 39.0894 116.477 41.6294C114.658 43.3149 112.438 44.5659 110.056 45.2557C109.74 45.3442 109.409 45.1626 109.317 44.8474C109.226 44.53 109.408 44.1981 109.725 44.1076C111.929 43.4724 113.983 42.3121 115.667 40.7534C117.231 39.3067 118.443 37.0057 117.409 35.3702C116.986 34.7041 116.223 34.2482 115.606 33.9261C113.675 32.9164 111.713 32.4484 109.93 32.5678C107.904 32.7063 106.057 33.6468 104.988 35.0839C103.983 36.4376 103.527 38.3352 103.595 40.8872C103.601 41.083 103.62 41.3884 103.644 41.7753C103.893 45.7 104.65 57.6357 98.6303 66.6642C95.371 71.5534 89.7442 74.0695 82.1953 74.0695H82.1949Z'
            fill='#1D1D1E'
          />
          <path
            d='M128.369 25.5833C128.281 25.5833 128.194 25.5858 128.107 25.5928C126.26 25.7122 124.53 26.7578 122.936 27.8703C122.811 27.9585 122.674 28.0516 122.528 28.1519C120.796 29.3432 117.57 31.5584 118.213 33.571C118.401 34.158 118.768 34.5854 119.334 34.8766C120.725 35.588 123.152 35.3184 124.94 34.7336C126.279 34.2969 127.578 33.7212 128.801 33.0243C129.62 32.5564 130.652 31.9 131.37 30.9616C132.049 30.076 132.34 29.0161 132.149 28.1233C131.805 26.5096 129.974 25.5833 128.369 25.5833ZM121.511 36.5024C120.575 36.5024 119.611 36.359 118.79 35.939C117.938 35.5022 117.362 34.8291 117.076 33.9336C116.164 31.0763 119.864 28.534 121.853 27.1682C121.996 27.0707 122.13 26.9775 122.253 26.8913C123.989 25.6812 125.891 24.5401 128.03 24.399C130.235 24.2606 132.814 25.5164 133.316 27.8726C133.582 29.1213 133.218 30.5104 132.318 31.6873C131.47 32.7949 130.309 33.5374 129.393 34.0603C128.1 34.7979 126.726 35.4066 125.311 35.8699C124.87 36.013 123.24 36.5024 121.511 36.5024H121.511Z'
            fill='#1D1D1E'
          />
          <path
            d='M130.422 33.5702C129.664 33.5702 128.784 34.0117 127.983 34.4153L127.958 34.4271C125.866 35.4752 123.739 36.0146 121.188 36.4993C120.238 36.6807 118.945 37.1987 118.425 38.0604C118.172 38.4782 118.128 38.9367 118.288 39.4593C118.514 40.1994 119.27 40.6862 119.7 40.9107C121.546 41.8753 123.732 41.6865 125.24 41.3572C128.312 40.6888 130.699 38.9675 131.625 36.7497C132.078 35.6636 132.029 34.2479 131.164 33.7539C130.938 33.6251 130.687 33.5702 130.422 33.5702V33.5702ZM122.897 42.8158C121.677 42.8158 120.362 42.6033 119.148 41.9707C118.42 41.5913 117.483 40.9084 117.146 39.8103C116.889 38.9675 116.977 38.149 117.402 37.4446C118.312 35.9358 120.359 35.444 120.965 35.3271C123.417 34.8618 125.454 34.3458 127.423 33.36L127.447 33.3479C128.731 32.7036 130.329 31.9014 131.756 32.7177C133.248 33.5675 133.37 35.666 132.726 37.2084C131.65 39.7864 128.946 41.7726 125.494 42.5245C124.748 42.6867 123.851 42.8158 122.897 42.8158Z'
            fill='#1D1D1E'
          />
          <path
            d='M116.786 42.3963C116.409 42.7762 116.003 43.2176 115.952 43.664C115.899 44.1246 116.251 44.7072 116.944 45.3039C118.793 46.8962 122.785 48.2498 125.162 47.6098C126.939 47.1302 128.433 46.0822 129.26 44.7334C129.635 44.1246 129.806 43.5567 129.771 43.0482C129.734 42.5085 129.421 42.0265 129.009 41.8736C128.522 41.6947 127.918 41.9095 127.278 42.1361C127.15 42.1817 127.021 42.2269 126.895 42.2698C124.757 42.9835 122.524 42.7331 121.031 42.4824C120.672 42.4228 120.292 42.3249 119.925 42.2317C118.49 41.869 117.496 41.6826 116.786 42.3963ZM123.775 48.9685C121.105 48.9685 117.894 47.6961 116.165 46.2087C115.149 45.3351 114.665 44.4066 114.766 43.528C114.86 42.7044 115.421 42.0788 115.939 41.5562C117.183 40.3027 118.866 40.7326 120.219 41.0762C120.578 41.167 120.918 41.2528 121.229 41.3055C123.401 41.6705 125.082 41.6183 126.517 41.1386C126.636 41.0977 126.757 41.0548 126.878 41.0119C127.653 40.7373 128.531 40.4246 129.424 40.7564C130.274 41.0715 130.893 41.9596 130.962 42.9645C131.015 43.7261 130.785 44.5329 130.278 45.359C129.292 46.9656 127.541 48.2047 125.473 48.7631C124.95 48.9038 124.376 48.9685 123.774 48.9685H123.775Z'
            fill='#1D1D1E'
          />
          <path
            d='M47.2267 27.5C33.7637 27.5 22.811 37.7915 22.811 50.4437C22.811 63.0958 33.7637 73.3893 47.2267 73.3893C60.6894 73.3893 71.6423 63.0958 71.6423 50.4437C71.6423 37.7915 60.6894 27.5 47.2267 27.5ZM47.2267 74.583C33.1056 74.583 21.6172 63.7545 21.6172 50.4437C21.6172 37.1348 33.1056 26.3066 47.2267 26.3066C61.3477 26.3066 72.8359 37.1348 72.8359 50.4437C72.8359 63.7545 61.3477 74.583 47.2267 74.583Z'
            fill='#1D1D1E'
          />
          <path
            d='M24.1763 95.6278C26.1861 95.9862 28.158 96.5423 30.0746 97.2918C31.478 97.8409 33.5241 98.7527 35.0799 100.319C36.2535 101.5 37.1059 102.954 37.6417 104.702C37.6064 98.8486 37.5686 92.8539 37.5219 86.953C34.1242 91.1973 29.334 94.2817 24.1764 95.6278H24.1763ZM48.2921 129.39C44.9379 129.39 41.5858 129.09 38.2875 128.486C38.0059 128.436 37.8004 128.19 37.7981 127.903C37.7649 123.919 37.7364 119.88 37.7106 115.862C37.2949 118.068 36.5993 120.374 35.1555 122.241C32.8678 125.196 29.402 125.857 27.1604 124.979C25.2817 124.246 23.7156 122.057 24.3784 119.973C24.9401 118.204 26.5891 117.452 28.1844 116.724C28.9683 116.366 29.779 115.996 30.4137 115.516C31.5902 114.626 32.3377 113.184 32.9971 111.911C33.1488 111.618 33.5091 111.506 33.8015 111.656C34.0941 111.809 34.2085 112.167 34.0568 112.46C33.3391 113.845 32.5255 115.416 31.1338 116.469C30.394 117.027 29.5227 117.426 28.6798 117.81C27.259 118.459 25.9172 119.071 25.5158 120.334C25.0624 121.761 26.2476 123.341 27.595 123.869C30.0094 124.812 32.7514 123.396 34.211 121.51C35.8512 119.391 36.4396 116.547 36.7986 114.043C37.6678 107.987 36.8287 103.773 34.2328 101.159C32.836 99.7532 30.9423 98.9132 29.639 98.4019C26.3934 97.1321 22.9811 96.4422 19.4971 96.349C19.1765 96.342 18.92 96.0819 18.9161 95.7593C18.9121 95.4395 19.1625 95.172 19.4826 95.1579C26.5464 94.7996 33.493 90.8417 37.6114 84.8308C37.7585 84.6159 38.029 84.5204 38.2778 84.5969C38.5271 84.6733 38.6985 84.9023 38.7005 85.1628C38.7594 92.2596 38.8033 99.5242 38.8462 106.55C38.8875 113.399 38.9304 120.474 38.9873 127.399C47.0668 128.798 55.4696 128.35 63.3534 126.091C62.0762 111.715 58.7323 83.7564 58.6982 83.4725C58.6753 83.2791 58.7474 83.088 58.8916 82.9566C59.0357 82.8279 59.2345 82.7753 59.4236 82.8185C60.2405 83.0069 61.454 83.4487 62.9906 84.0071C70.359 86.6879 85.6919 92.2669 99.4124 84.9334C109.937 79.3067 117.562 67.1008 122.076 48.6551C122.155 48.3349 122.478 48.1395 122.798 48.2157C123.118 48.2947 123.314 48.6192 123.236 48.939C118.638 67.7286 110.812 80.1924 99.9752 85.9863C94.7475 88.7793 89.3173 89.7699 84.1687 89.7699C75.3418 89.7723 67.3391 86.8599 62.5824 85.1292C61.5573 84.7544 60.6797 84.4369 59.9892 84.2174C60.5782 89.1756 63.4643 113.654 64.5857 126.476C64.6105 126.757 64.4326 127.018 64.1606 127.099C59.0204 128.622 53.6549 129.39 48.2918 129.39L48.2921 129.39Z'
            fill='#1D1D1E'
          />
          <path
            d='M21.0551 207.483C17.0108 207.483 14.6115 206.342 13.9219 204.088C13.4793 202.642 13.993 201.121 14.4182 200.102C15.9493 196.43 18.79 193.215 22.4173 191.052C25.8713 188.992 29.8239 188.013 33.6108 188.268C36.5138 168.338 38.0584 148.025 38.2019 127.889C38.2043 127.559 38.4792 127.294 38.803 127.297C39.1328 127.299 39.398 127.566 39.3954 127.898C39.2506 148.276 37.674 168.832 34.7103 188.997C34.6641 189.312 34.3775 189.536 34.0604 189.503C26.4381 188.739 18.4681 193.489 15.5201 200.56C15.1361 201.482 14.7371 202.675 15.0634 203.74C15.7199 205.886 18.777 206.313 21.2322 206.29C29.1635 206.223 37.2031 205.996 45.138 205.616C45.6603 201.799 45.6342 185.996 45.6087 170.692C45.5782 152.365 45.5467 133.415 46.3458 129.197C46.4072 128.872 46.7189 128.658 47.0435 128.72C47.367 128.782 47.5801 129.094 47.5188 129.417C46.7407 133.525 46.7719 152.42 46.8021 170.692C46.8303 187.5 46.8568 203.375 46.2299 206.313C46.1736 206.578 45.9456 206.772 45.6755 206.784C37.5696 207.18 29.3492 207.414 21.2425 207.483C21.1798 207.483 21.1172 207.483 21.0553 207.483L21.0551 207.483Z'
            fill='#1D1D1E'
          />
          <path
            d='M75.5354 207.483C75.4731 207.483 75.411 207.483 75.3481 207.483C67.2415 207.414 59.0212 207.18 50.915 206.783C50.6448 206.772 50.4168 206.578 50.3606 206.313C49.734 203.375 49.7602 187.5 49.7883 170.691C49.819 152.42 49.8503 133.525 49.072 129.417C49.0107 129.094 49.2235 128.782 49.5473 128.72C49.8709 128.658 50.1833 128.872 50.245 129.197C51.0438 133.415 51.0126 152.365 50.9821 170.694C50.9567 185.998 50.9303 201.799 51.4525 205.616C59.3874 205.996 67.4268 206.223 75.3586 206.289C75.4142 206.289 75.4705 206.289 75.5265 206.289C77.9485 206.289 80.8856 205.836 81.5272 203.74C81.8534 202.675 81.4545 201.482 81.0707 200.56C78.1225 193.489 70.1533 188.739 62.5304 189.503C62.2136 189.536 61.9263 189.312 61.8801 188.996C58.8719 168.529 57.3392 148.736 57.1948 128.486C57.1928 128.156 57.4579 127.886 57.7878 127.884C57.7891 127.884 57.7905 127.884 57.7918 127.884C58.1193 127.884 58.3862 128.149 58.3885 128.479C58.5312 148.488 60.033 168.051 62.98 188.268C66.7683 188.013 70.7195 188.992 74.1733 191.052C77.8006 193.217 80.6413 196.43 82.1726 200.102C82.5976 201.121 83.1115 202.642 82.6687 204.088C81.9794 206.342 79.5794 207.483 75.5356 207.483L75.5354 207.483Z'
            fill='#1D1D1E'
          />
          <path
            d='M45.2624 43.4106C45.2624 45.8694 44.3184 47.8627 43.1547 47.8627C41.9904 47.8627 41.0469 45.8693 41.0469 43.4106C41.0469 40.9542 41.9905 38.9609 43.1547 38.9609C44.3185 38.9609 45.2624 40.9543 45.2624 43.4106Z'
            fill='#FEFEFE'
          />
          <path
            d='M43.154 39.5566C42.5379 39.5566 41.6429 41.0581 41.6429 43.4096C41.6429 45.7636 42.5379 47.265 43.154 47.265C43.7701 47.265 44.6649 45.7636 44.6649 43.4096C44.6649 41.0581 43.7702 39.5566 43.154 39.5566ZM43.154 48.4587C41.6119 48.4587 40.4492 46.2884 40.4492 43.4096C40.4492 40.5332 41.612 38.3633 43.154 38.3633C44.6957 38.3633 45.8586 40.5332 45.8586 43.4096C45.8586 46.2884 44.6957 48.4587 43.154 48.4587Z'
            fill='#1D1D1E'
          />
          <path
            d='M56.6423 43.6449C56.6423 46.1038 55.6987 48.0969 54.5345 48.0969C53.3703 48.0969 52.4268 46.1037 52.4268 43.6449C52.4268 41.1885 53.3704 39.1953 54.5345 39.1953C55.6988 39.1953 56.6423 41.1885 56.6423 43.6449Z'
            fill='#FEFEFE'
          />
          <path
            d='M54.5345 39.7911C53.9185 39.7911 53.0238 41.2925 53.0238 43.644C53.0238 45.9979 53.9184 47.4994 54.5345 47.4994C55.1507 47.4994 56.0457 45.9979 56.0457 43.644C56.0457 41.2925 55.1508 39.7911 54.5345 39.7911ZM54.5345 48.6931C52.9925 48.6931 51.8301 46.5228 51.8301 43.644C51.8301 40.7675 52.9925 38.5977 54.5345 38.5977C56.0766 38.5977 57.2391 40.7675 57.2391 43.644C57.2391 46.5228 56.0765 48.6931 54.5345 48.6931Z'
            fill='#1D1D1E'
          />
          <path
            d='M45.0279 43.4104C45.0279 45.4801 44.6084 47.1586 44.091 47.1586C43.5737 47.1586 43.1543 45.4801 43.1543 43.4104C43.1543 41.3407 43.5737 39.665 44.091 39.665C44.6084 39.665 45.0279 41.3407 45.0279 43.4104Z'
            fill='#1D1D1E'
          />
          <path
            d='M56.4081 43.6441C56.4081 45.7138 55.9886 47.3919 55.4712 47.3919C54.9539 47.3919 54.5342 45.7138 54.5342 43.6441C54.5342 41.5769 54.9539 39.8984 55.4712 39.8984C55.9886 39.8984 56.4081 41.5769 56.4081 43.6441Z'
            fill='#1D1D1E'
          />
          <path
            d='M38.5853 37.0645C38.344 37.0645 38.1166 36.9191 38.0264 36.678C37.9108 36.3699 38.0671 36.0263 38.3757 35.9094L43.8867 33.8444C44.1961 33.7297 44.5393 33.885 44.655 34.1929C44.7707 34.5008 44.6141 34.847 44.3058 34.9613L38.7948 37.0266C38.7257 37.0528 38.655 37.0645 38.5853 37.0645Z'
            fill='#1D1D1E'
          />
          <path
            d='M55.3892 36.7022C55.3442 36.7022 55.2987 36.6976 55.2531 36.6855L49.5218 35.3486C49.2006 35.2722 49.0013 34.9524 49.0764 34.6327C49.1511 34.3102 49.4713 34.1098 49.793 34.1862L55.5243 35.5231C55.845 35.5994 56.0449 35.9192 55.9697 36.2417C55.9057 36.5159 55.6603 36.7022 55.3891 36.7022H55.3892Z'
            fill='#1D1D1E'
          />
          <path
            d='M48.1093 61.6343C42.884 61.6343 37.9988 60.1755 35.0413 57.7357C34.7869 57.5259 34.7509 57.1484 34.9608 56.8957C35.1707 56.6403 35.5468 56.6043 35.8009 56.8145C38.5514 59.0846 43.1528 60.4405 48.1093 60.4405C52.687 60.4405 56.9333 59.3018 59.7589 57.3156C60.0287 57.1269 60.4008 57.1915 60.5902 57.461C60.7799 57.7309 60.7146 58.1034 60.4452 58.2921C57.4234 60.4167 52.9272 61.6342 48.1094 61.6342L48.1093 61.6343Z'
            fill='#1D1D1E'
          />
          <path
            d='M25.2755 38.4161C25.0467 38.4161 24.8286 38.2824 24.7297 38.0605C20.2311 27.9339 20.5467 15.9908 25.5739 6.11497C25.7234 5.82122 26.083 5.70422 26.3764 5.8548C26.67 6.00259 26.7871 6.36341 26.6375 6.65697C21.7716 16.2153 21.4663 27.774 25.8204 37.5761C25.9545 37.8769 25.8185 38.2301 25.5173 38.3639C25.4387 38.3994 25.3563 38.4161 25.2755 38.4161Z'
            fill='#1D1D1E'
          />
          <path
            d='M67.6317 37.6695C67.5534 37.6695 67.4739 37.6551 67.3975 37.622C67.0944 37.4929 66.9537 37.1419 67.0834 36.8389C71.2611 27.0562 70.6125 15.2227 65.3905 5.95554C65.2286 5.66923 65.3302 5.30396 65.6175 5.14165C65.9051 4.97908 66.2685 5.08201 66.4304 5.36832C71.831 14.9529 72.5018 27.192 68.1809 37.3069C68.084 37.5335 67.8634 37.6696 67.6317 37.6696V37.6695Z'
            fill='#1D1D1E'
          />
          <path
            d='M27.4687 4.85195C27.0358 6.41772 26.177 7.54713 25.5505 7.37512C24.9239 7.20083 24.7668 5.78993 25.1994 4.22406C25.6322 2.65802 26.4907 1.52897 27.1176 1.70089C27.7441 1.87527 27.9016 3.28582 27.4687 4.85195Z'
            fill='#F9E505'
          />
          <path
            d='M26.9531 2.29338C26.7248 2.39832 26.1366 3.0715 25.7738 4.38455C25.411 5.69751 25.5704 6.57585 25.7132 6.78363C25.9414 6.67869 26.5296 6.00524 26.8925 4.69254C27.2553 3.3795 27.0959 2.50089 26.9531 2.29338ZM25.6788 7.98911C25.5661 7.98911 25.4689 7.97232 25.3906 7.95081C25.0698 7.86266 24.5121 7.54015 24.3836 6.38976C24.3093 5.71894 24.3943 4.89534 24.6234 4.06702C25.0772 2.42219 26.0998 0.801319 27.2753 1.12576C28.4503 1.45072 28.4969 3.36734 28.0428 5.0099C27.8139 5.84058 27.4638 6.5901 27.0566 7.12713C26.526 7.82436 26.0285 7.98903 25.6789 7.98903L25.6788 7.98911Z'
            fill='#1D1D1E'
          />
          <path
            d='M65.6771 2.91596C66.2919 4.41999 66.3022 5.84034 65.7006 6.08642C65.0988 6.33207 64.1127 5.31031 63.498 3.80654C62.8835 2.30241 62.8732 0.882063 63.4748 0.636069C64.0766 0.390424 65.0627 1.41209 65.6771 2.91596Z'
            fill='#F9E505'
          />
          <path
            d='M63.7071 1.20432C63.5898 1.42662 63.5352 2.3193 64.0507 3.57971C64.5659 4.84256 65.2293 5.43949 65.4683 5.51592C65.5856 5.29633 65.6403 4.40339 65.1251 3.1429C64.6096 1.88004 63.9461 1.28075 63.7071 1.20432ZM65.51 6.71904C65.1707 6.71904 64.7098 6.5709 64.1751 6.01709C63.7074 5.53236 63.271 4.82848 62.9455 4.03094C62.3009 2.45301 62.1209 0.545657 63.2488 0.0850626C64.3773 -0.375882 65.585 1.11381 66.23 2.68939C66.5552 3.48675 66.7372 4.296 66.7419 4.96919C66.7506 6.1271 66.2343 6.51126 65.9263 6.63789C65.8227 6.68083 65.682 6.71904 65.51 6.71904Z'
            fill='#1D1D1E'
          />
          <path
            d='M37.5149 33.973C32.3274 33.973 28.1069 38.1938 28.1069 43.3812C28.1069 48.5684 32.3275 52.7891 37.5149 52.7891C42.7027 52.7891 46.9234 48.5683 46.9234 43.3812C46.9234 38.1937 42.7026 33.973 37.5149 33.973ZM37.5149 53.9825C31.669 53.9825 26.9131 49.2274 26.9131 43.3812C26.9131 37.5347 31.669 32.7793 37.5149 32.7793C43.3607 32.7793 48.1168 37.5347 48.1168 43.3812C48.1168 49.2274 43.3607 53.9825 37.5149 53.9825Z'
            fill='#1D1D1E'
          />
          <path
            d='M59.8793 33.973C54.6915 33.973 50.4712 38.1938 50.4712 43.3812C50.4712 48.5684 54.6916 52.7891 59.8793 52.7891C65.0669 52.7891 69.2875 48.5683 69.2875 43.3812C69.2875 38.1937 65.0668 33.973 59.8793 33.973ZM59.8793 53.9825C54.0334 53.9825 49.2773 49.2274 49.2773 43.3812C49.2773 37.5347 54.0334 32.7793 59.8793 32.7793C65.7252 32.7793 70.481 37.5347 70.481 43.3812C70.481 49.2274 65.7252 53.9825 59.8793 53.9825Z'
            fill='#1D1D1E'
          />
          <path
            d='M49.8745 43.979H47.5205C47.1911 43.979 46.9238 43.7115 46.9238 43.3823C46.9238 43.0527 47.191 42.7852 47.5205 42.7852H49.8745C50.2043 42.7852 50.4716 43.0527 50.4716 43.3823C50.4716 43.7114 50.2044 43.979 49.8745 43.979Z'
            fill='#1D1D1E'
          />
          <path
            d='M23.2759 44.2404C22.9633 44.2404 22.7005 43.9994 22.6809 43.682C22.6603 43.3525 22.9105 43.0709 23.2393 43.0495L27.4727 42.7842C27.8033 42.7652 28.085 43.016 28.1055 43.343C28.1261 43.6723 27.876 43.9565 27.5472 43.9756L23.3137 44.2404C23.301 44.2404 23.2883 44.2404 23.2758 44.2404H23.2759Z'
            fill='#1D1D1E'
          />
          <path
            d='M110.196 21.9328C109.364 22.3555 109.029 23.3723 109.449 24.2057L111.277 27.8246C111.697 28.6577 112.716 28.9919 113.549 28.5719L117.169 26.7456C118 26.3255 118.336 25.3062 117.915 24.4728L116.088 20.8538C115.667 20.0209 114.648 19.6865 113.816 20.1066L110.196 21.9328ZM117.248 26.9008L113.628 28.7294C112.709 29.1923 111.584 28.8245 111.12 27.9057L109.292 24.2844C108.828 23.3653 109.198 22.2409 110.117 21.7777L113.736 19.9495C114.655 19.4835 115.781 19.8536 116.245 20.7751L118.073 24.394C118.537 25.3132 118.167 26.4375 117.248 26.9008Z'
            fill='#FEFEFE'
          />
          <path
            d='M113.364 22.4984L114.02 22.1689L113.349 24.0452L115.757 25.2916L115.142 25.602L113.136 24.5396L112.913 25.1269L113.557 26.4038L113.056 26.6568L111.445 23.4676L111.946 23.2145L112.48 24.2722C112.549 24.4083 112.548 24.597 112.555 24.7472L112.656 24.7425C112.648 24.592 112.631 24.4013 112.684 24.2651L113.364 22.4985L113.364 22.4984Z'
            fill='#FEFEFE'
          />
          <path
            d='M115.796 24.8594L116.145 24.6826L116.314 25.0169L115.965 25.1912L115.796 24.8594Z'
            fill='#FEFEFE'
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};