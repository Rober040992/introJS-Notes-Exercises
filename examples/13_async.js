console.log('12');

const cargarDatosWebCb = (cb) => {
  setTimeout(() => {
    const datos = [1,2,4];
    cb(datos);
  }, 1000);
};

const cargarDatosDetalleCb = (cb) => {
  setTimeout(() => {
    const datos = [1,2,4];
    cb(datos);
  }, 1000);
};

const cargarDatosUsuario = () => {
  setTimeout(() => {
    const datos = [1,2,4];
    cb(datos);
  }, 1000);
};

const cargarDatosWeb = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [1,2,4];
      resolve(datos);
    }, 1000);
  });
};

const cargarDatosDetalle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [1,2,4];
      resolve(datos);
    }, 1000);
  });
};

const cargarDatosUsuarioCb = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [1,2,4];
      resolve(datos);
    }, 1000);
  });
};

// callbacks
// promises | bluebird q
// async/await

console.log('Hola');

let loading = true;

// callback
cargarDatosWebCb((datos) => {
  console.log(datos);
  cargarDatosDetalleCb(() => {
    cargarDatosUsuarioCb(() => {
      loading = false;
      console.log(loading);
    });
  });
});

// promesas
cargarDatosWeb()
  .then(() => cargarDatosDetalle())
  .then(() => cargarDatosUsuario())
  .then(() => {
    loading = false;
    console.log(loading);
  })
  .catch(() => {
    console.log('Error');
  });

// async/await
const main = async () => {
  try {
    const datos = await cargarDatosWeb();
    await cargarDatosDetalle();
    await cargarDatosUsuario();
    loading = false;
    console.log(loading);
  } catch (error) {
    console.log(error);
  }
};

main();