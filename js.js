/*سن کاربر را دریافت کنید.
اگر سن کاربر کمتر از 18 بود، به او پیغام "شما مجاز به ورود نیستید" را نمایش بدهید و در غیر این صورت پیغام "ورود به پنل" را نمایش بدهید.*/

let yourAge = +(prompt("Enter your age : "))
if (18 < yourAge ) {
	alert("  سن شما بیشتر از 18 میباشد")
} else {
	alert("سن شما مجاز برای ورود نمیباشد")
}
