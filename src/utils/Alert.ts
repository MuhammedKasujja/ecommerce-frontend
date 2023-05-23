import Swal from "sweetalert2";

interface IAlertProps {
    callback: (...arg: any) => void;
}

type Separator = " " | "-" | "_";

// interface ICapitalizeString {
//     str: string,
//     separator: Seperator
// }

type AlertType = "error" | "success";

class AppUtils {
    private constructor() {}

    static showAlert({ callback }: IAlertProps) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                callback;
            }
        });
    }

    static showNotification(message: string, type: AlertType) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            timer: 3000,
            showConfirmButton: false,
            timerProgressBar: true,
            customClass: {
                container: "fancy-popup",
                popup: type === "success" ? "popup-success" : "popup-error"
            },
            icon: type
        });
        Toast.fire({
            title: message
        });
    }

    static capitalizeWords(str: string, separator: Separator = " ") {
        return str
            .toLowerCase()
            .split(separator)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    // full screen mode
    static setFullScreen() {
        const element = document.getElementById("contentdiv");
        if (element?.requestFullscreen) {
            element.requestFullscreen();
        } else if (element?.webkitRequestFullscreen) {
            /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            /* IE11 */
            element.msRequestFullscreen();
        }
        // isFullscreen.value = true;
    }

     //  exit fullscreen
     static exitFullScreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
        // isFullscreen.value = false;
      }
}

export default AppUtils;
