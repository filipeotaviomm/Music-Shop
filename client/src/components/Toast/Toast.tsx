import * as Toast from "@radix-ui/react-toast";

function Toaster(title: string, description: string) {
  return (
    <Toast.Provider>
      <Toast.Root>
        <Toast.Title>{title}</Toast.Title>
        <Toast.Description>{description}</Toast.Description>
        {/*<Toast.Action />*/}
        <Toast.Close />
      </Toast.Root>

      <Toast.Viewport />
    </Toast.Provider>
  );
}

export default Toaster;
