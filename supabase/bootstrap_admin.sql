-- شغّل هذا مرة واحدة بعد إنشاء الحساب وتأكيد بريده.
-- استبدل البريد، وتحقق أن التحديث أصاب صفًا واحدًا فقط.
update public.profiles
set role = 'admin'
where id = (select id from auth.users where email = 'owner@example.com');
