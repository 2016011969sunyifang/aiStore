import { Toast } from "vant";
export default function successNotify(message: string, returns:boolean, duration: number) {
  setTimeout(
    () => {
      returns?this.$router.go(-1):'';
    },
    duration ? duration : 1000
  );
  Toast.allowMultiple(true);
  Toast.success({
    duration: duration ? duration : 1000, // 持续展示 toast
    message,
  });
}
