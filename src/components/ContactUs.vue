<template>
    <section class="position-relative py-5">
      <div class="d-md-none">
        <iframe
          
          frameborder="0"
          src="https://cdn.bootstrapstudio.io/placeholders/map.html"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div
        class="d-none d-md-block position-absolute top-0 start-0 w-100 h-100"
      >
        <iframe
          frameborder="0"
          src="https://cdn.bootstrapstudio.io/placeholders/map.html"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div class="position-relative mx-2 my-5 m-md-5">
        <div class="container position-relative">
          <div class="row">
            <div
              class="col-md-6 col-xl-5 col-xxl-4 offset-md-6 offset-xl-7 offset-xxl-8"
            >
              <div>
                <form
                  class="border rounded shadow p-3 p-md-4 p-lg-5"
                  method="post"
                  style="background: var(--bs-body-bg)"
                >
                  <h3 class="text-center mb-3">Contact us</h3>
                  <!-- Start: Success Example -->
                  <div class="mb-3">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <!-- End: Success Example -->
                  <!-- Start: Error Example -->
                  <div class="mb-3">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <!-- End: Error Example -->
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Message"
                      rows="6"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary" type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>

</script>
<style>
@font-face {
	font-family: 'Poppins';
	src: url(@/assets/fonts/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
	font-family: 'Poppins';
	src: url(@/assets/fonts/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
	font-family: 'Poppins';
	src: url(@/assets/fonts/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

</style>