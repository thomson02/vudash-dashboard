'use strict'

class ImageWidget {

  register (options, emit) {
    return {
      /* How often the job should run */
      schedule: options.schedule || 60000,

      /* This is run every ^schedule, and the resolved promise's value is sent to the client */
      job: () => {
        return Promise.resolve({
          imageUrl: options.imageUrl,
          imageSize: options.imageSize || "100%"
        })
      }
    }
  }

}

module.exports = ImageWidget